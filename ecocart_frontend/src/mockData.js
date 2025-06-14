// PUBLIC_INTERFACE
export function mockProductSearch(query, source = 'amazon') {
  // Pretend to return real search results, each has ecoScore and carbonImpact
  if (!query) return [];
  return [
    {
      id: 'a1',
      name: query + ' Stainless Steel Mug',
      brand: 'EcoBrand',
      price: '₹299',
      link: 'https://amazon.in/productA',
      img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?fit=crop&w=100&q=80',
      ecoScore: 8.7,
      carbonImpact: 0.8,
      badges: ['BPA Free', 'Reusable'],
    },
    {
      id: 'a2',
      name: query + ' Plastic Mug',
      brand: 'Plastic Inc.',
      price: '₹125',
      link: 'https://amazon.in/productB',
      img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?fit=crop&w=100&q=80',
      ecoScore: 3.1,
      carbonImpact: 2.7,
    },
    {
      id: 'a3',
      name: query + ' Bamboo Mug',
      brand: 'Earthware',
      price: '₹249',
      link: 'https://flipkart.com/productC',
      img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=100&q=80',
      ecoScore: 9.1,
      carbonImpact: 0.6,
      badges: ['Biodegradable'],
    },
  ];
}

// PUBLIC_INTERFACE
export function mockGreenerAlternatives(query, source = 'amazon') {
  if (!query) return [];
  return [
    {
      id: 'g1',
      name: '🌳 ' + query + ' Upcycled Coconut Mug',
      brand: 'GreenCo',
      price: '₹349',
      link: 'https://flipkart.com/productG',
      img: 'https://images.unsplash.com/photo-1444065381814-865dc9da92c0?fit=crop&w=100&q=80',
      ecoScore: 9.6,
      carbonImpact: 0.3,
      badges: ['Handmade', 'Compostable'],
    },
    {
      id: 'g2',
      name: '🌿 ' + query + ' Wheat-Stalk Travel Mug',
      brand: 'GoGreen',
      price: '₹219',
      link: 'https://amazon.in/productH',
      img: 'https://images.unsplash.com/photo-1521109464564-2fa2faa9581d?fit=crop&w=100&q=80',
      ecoScore: 9.0,
      carbonImpact: 0.4,
    }
  ];
}
