function search(term) {
    const database = ["http://example.com", "https://another-url.com", "http://randomsite.net"];
    
    if (!term.trim()) return []; // Handle empty search

    return database.filter(url => url.toLowerCase().includes(term.toLowerCase()));
}

module.exports = search;
