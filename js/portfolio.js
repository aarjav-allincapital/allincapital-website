const DOM = {
  portfolio_list: document.querySelector('.portfolio-list_md'),
  loader: document.getElementById('portfolio-loader'),
  dynamic_modal: {
    parent: document.getElementById('portfolio-dynamic'),
    name: document.getElementById('portfolio-dynamic-name'),
    logo: document.getElementById('portfolio-dynamic-logo'),
    website: document.getElementById('portfolio-dynamic-website'),
    notes: document.getElementById('portfolio-dynamic-notes'),
    sectors: document.getElementById('portfolio-dynamic-sectors'),
  }
}

// CSV file path - just put your CSV file in the same folder as this HTML file
const CSV_FILE_PATH = '/company_portfolio/portfolio.csv';

// Function to parse CSV text into JSON objects
const parseCSV = (csvText) => {
  const lines = csvText.trim().split('\n');
  const headers = lines[0].split(',').map(header => header.trim());

  const data = [];
  for (let i = 1; i < lines.length; i++) {
    const values = [];
    let currentValue = '';
    let insideQuotes = false;
    
    // Handle CSV parsing with commas inside quotes
    for (let j = 0; j < lines[i].length; j++) {
      const char = lines[i][j];
      if (char === '"') {
        insideQuotes = !insideQuotes;
      } else if (char === ',' && !insideQuotes) {
        values.push(currentValue.trim());
        currentValue = '';
      } else {
        currentValue += char;
      }
    }
    values.push(currentValue.trim()); // Push the last value
    
    // Create object from headers and values
    const obj = {};
    headers.forEach((header, index) => {
      let value = values[index] || '';
      // Remove quotes if they exist
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      obj[header] = value;
    });

    // Transform to match expected format
    const portfolioItem = {
      name: obj.name || '',
      notes: obj.notes || '',
      website: obj.website || '',
      sectors: obj.sectors || '',
      category: obj.category || '', // Add category field
      logo: obj.logos ? `/company_portfolio/${obj.logos}` : '/company_portfolio/default.jpg'
    };

    data.push(portfolioItem);
  }

  return data;
};

// Function to read CSV file
const readCSVFile = async () => {
  try {
    const response = await fetch(CSV_FILE_PATH);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const csvText = await response.text();
    return parseCSV(csvText);
  } catch (error) {
    //console.error('Error reading CSV file:', error);
    //console.log('Make sure your CSV file is in the same directory as your HTML file');

    // Fallback to some sample data if CSV fails
    return [
      {
        name: 'Sample Company',
        notes: 'This is a sample company - CSV file not found',
        website: 'https://example.com',
        sectors: 'Sample',
        category: 'Fund 1',
        logo: '/company_portfolio/default.png'
      }
    ];
  }
};

// Function to group data by category
const groupByCategory = (data) => {
  const grouped = {};
  
  data.forEach(item => {
    if (item.name && item.category) { // Only include items with name and category
      if (!grouped[item.category]) {
        grouped[item.category] = [];
      }
      grouped[item.category].push(item);
    }
  });
  
  return grouped;
};

// Create category section header
const createCategoryHeader = (categoryName) => {
  const headerContainer = document.createElement('div');
  headerContainer.classList.add('portfolio-category-section');
  //headerContainer.style.cssText = 'margin: 2rem 0 1rem 0; clear: both;'; // Ensure visibility
  
  const header = document.createElement('h2');
  header.classList.add('portfolio-category-title');
  header.textContent = categoryName;
  // <h2> is already a level-2 heading

  // Add inline styles to ensure visibility
//   header.style.cssText = `
//     font-size: 1.8rem;
//     font-weight: 600;
//     color: #333;
//     margin: 0 0 1rem 0;
//     padding: 0.5rem 0;
//     border-bottom: 2px solid #007bff;
//     display: block;
//     width: 100%;
//   `;
  
  headerContainer.appendChild(header);
  return headerContainer;
};

// Create portfolio card HTML element
const createPortfolioCard = (item) => {
  const portfolio_card = document.createElement('a');
  portfolio_card.href = item.website;
  portfolio_card.target = '_blank';
  portfolio_card.rel = 'noopener noreferrer'; // Security best practice
  portfolio_card.classList.add('portfolio-card');

  // no aria-label: the card is named by its own visible text
  portfolio_card.setAttribute('aria-haspopup', 'dialog');

  const portfolio_card_logo = document.createElement('div');
  portfolio_card_logo.classList.add('portfolio-card--logo');
  portfolio_card_logo.setAttribute('aria-hidden', 'true'); // decorative

  const portfolio_card_logo_img = document.createElement('img');
  portfolio_card_logo_img.src = item.logo;
  portfolio_card_logo_img.alt = '';

  // WCAG and Performance attributes
  portfolio_card_logo_img.loading = 'lazy'; // Lazy loading
  portfolio_card_logo_img.decoding = 'async'; // Async decoding

  // Add error handling for missing images
  portfolio_card_logo_img.onerror = function () {
    this.src = '/company_portfolio/default.png';
  };

  portfolio_card_logo.appendChild(portfolio_card_logo_img);

  const portfolio_card_content = document.createElement('div');
  portfolio_card_content.classList.add('portfolio-card--content');

  // plain text — these sit inside the card's <a>
  const portfolio_card_title = document.createElement('span');
  portfolio_card_title.classList.add('portfolio-card--title');
  portfolio_card_title.textContent = item.name;

  const portfolio_card_category = document.createElement('span');
  portfolio_card_category.classList.add('portfolio-card--category');
  portfolio_card_category.textContent = item.sectors;

  const portfolio_card_notes = document.createElement('span');
  portfolio_card_notes.classList.add('portfolio-card--notes');
  portfolio_card_notes.textContent = item.notes;

  portfolio_card_content.appendChild(portfolio_card_title);
  portfolio_card_content.appendChild(portfolio_card_category);
  portfolio_card_content.appendChild(portfolio_card_notes);

  portfolio_card.appendChild(portfolio_card_logo);
  portfolio_card.appendChild(portfolio_card_content);

  return portfolio_card;
};

// Create category cards container
const createCategoryCardsContainer = () => {
  const container = document.createElement('div');
  container.classList.add('portfolio-category-cards');
  // Add inline styles to ensure proper display
//   container.style.cssText = `
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//     gap: 1.5rem;
//     margin-bottom: 3rem;
//     width: 100%;
//   `;
  return container;
};

// Populate modal with company details
const populateModal = (company) => {
  const modalElements = DOM.dynamic_modal;
  modalElements.name.textContent = company.name;
  modalElements.logo.src = company.logo;
  modalElements.website.href = company.website;
  modalElements.notes.textContent = company.notes;
  modalElements.sectors.textContent = company.sectors;
}

// Show modal
const showModal = () => {
  const modal = DOM.dynamic_modal.parent;
  $(modal).modal('show');
}

// Handle card click event
const handleOnCardClick = (event, company) => {
  //console.log('Card clicked:', company.name);
  populateModal(company);
  showModal();
}

// Main function to render portfolio companies grouped by category
const renderPortfolioCompanies = async () => {
  //console.log('Loading portfolio data from CSV...');

  // Show loader
  if (DOM.loader) {
    DOM.loader.style.display = "block";
  }

  try {
    // Read data from CSV file
    const data = await readCSVFile();
    //console.log(`Loaded ${data.length} companies from CSV`);

    // Group data by category
    const groupedData = groupByCategory(data);
    //console.log('Grouped data by categories:', Object.keys(groupedData));

    // Clear existing content
    DOM.portfolio_list.innerHTML = '';

    // Define the order of categories (optional - you can customize this)
    const categoryOrder = ['Fund 3', 'Fund 2', 'Fund 1']; // Add more as needed
    
    // Get all categories and sort them
    const allCategories = Object.keys(groupedData);
    const sortedCategories = categoryOrder.filter(cat => allCategories.includes(cat))
                            .concat(allCategories.filter(cat => !categoryOrder.includes(cat)));

    // Create sections for each category
    sortedCategories.forEach(category => {
      const companies = groupedData[category];
      
      //console.log(`Processing category: ${category} with ${companies ? companies.length : 0} companies`);
      
      if (companies && companies.length > 0) {
        // Create category header
        const categoryHeader = createCategoryHeader(category);
        //console.log(`Created header for ${category}:`, categoryHeader);
        DOM.portfolio_list.appendChild(categoryHeader);
        
        // Create container for cards in this category
        const cardsContainer = createCategoryCardsContainer();
        
        // Create and append cards for each company in this category
        companies.forEach(item => {
          let portfolio_card = createPortfolioCard(item);
          portfolio_card.addEventListener('click', (event) => {
            event.preventDefault();
            handleOnCardClick(event, item);
          });
          cardsContainer.appendChild(portfolio_card);
        });
        
        DOM.portfolio_list.appendChild(cardsContainer);
        //console.log(`Added ${companies.length} cards for ${category}`);
      }
    });

  } catch (error) {
    //console.error('Error rendering portfolio:', error);
    DOM.portfolio_list.innerHTML = '<p>Error loading portfolio data. Please check console for details.</p>';
  } finally {
    // Hide loader
    if (DOM.loader) {
      DOM.loader.style.display = "none";
    }
  }
}

// Function to refresh data (call this when you update your CSV)
const refreshPortfolio = () => {
  //console.log('Refreshing portfolio data...');
  renderPortfolioCompanies();
}

// Initialize the application
const init = () => {
  //console.log('Initializing portfolio application...');
  renderPortfolioCompanies();
}

// Start the application - loads once when page loads
init();

// Make refresh function available globally so you can call it manually from browser console if needed
window.refreshPortfolio = refreshPortfolio;