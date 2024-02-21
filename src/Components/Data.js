const Data = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1604014238170-4def1e4e6fcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    imageAlt: "Stylish Apartment with City View",
    beds: 3,
    baths: 2,
    title: "Stylish Apartment in Mumbai City Center",
    formattedPrice: "₹1,900.00",
    reviewCount: 34,
    rating: 4,
    propertyType: "rent"
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Modern Home with Pool and Garden",
    beds: 5,
    baths: 2,
    title: "Modern Home in Bangalore Suburbs",
    formattedPrice: "₹1,500.00",
    reviewCount: 29,
    rating: 3,
    propertyType: "rent"
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1626178793926-22b28830aa30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Cozy Home with Greenery",
    beds: 2,
    baths: 1,
    title: "Cozy Home near Pune Hills",
    formattedPrice: "₹1,000.00",
    reviewCount: 38,
    rating: 4,
    propertyType: "sell"
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
    imageAlt: "Spacious Home with Modern Interiors",
    beds: 4,
    baths: 2,
    title: "Spacious Home in Delhi Suburbs",
    formattedPrice: "₹1,900.00",
    reviewCount: 30,
    rating: 5,
    propertyType: "rent"
  },
  {
    id: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Luxurious Home with Panoramic View",
    beds: 3,
    baths: 2,
    title: "Luxurious Home in Hyderabad City",
    formattedPrice: "₹1,650.00",
    reviewCount: 26,
    rating: 4,
    propertyType: "sell"
  },
  {
    id: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Modern Home with Spacious Rooms",
    beds: 7,
    baths: 3,
    title: "Modern Home in Chennai Suburbs",
    formattedPrice: "₹3,000.00",
    reviewCount: 40,
    rating: 5,
    propertyType: "sell"
  },
  {
    id: 7,
    imageUrl:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Charming Home with Outdoor Pool",
    beds: 3,
    baths: 1,
    title: "Charming Home in Kolkata City",
    formattedPrice: "₹1,800.00",
    reviewCount: 19,
    rating: 2,
    propertyType: "rent"
  },
  {
    id: 8,
    imageUrl:
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80",
    imageAlt: "Stylish Home with City Skyline View",
    beds: 3,
    baths: 2,
    title: "Stylish Home in Mumbai Suburbs",
    formattedPrice: "₹2,000.00",
    reviewCount: 38,
    rating: 4,
    propertyType: "sell"
  },
  {
    id: 9,
    imageUrl:
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Modern Home with Elegant Design",
    beds: 4,
    baths: 2,
    title: "Modern Home in Pune City",
    formattedPrice: "₹2,200.00",
    reviewCount: 40,
    rating: 5,
    propertyType: "sell"
  },
  {
    id: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Elegant Home with Garden View",
    beds: 5,
    baths: 2,
    title: "Elegant Home in Delhi City",
    formattedPrice: "₹2,500.00",
    reviewCount: 28,
    rating: 4,
    propertyType: "sell"
  },
  {
    id: 11,
    imageUrl:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Spacious Home with Outdoor Space",
    beds: 5,
    baths: 3,
    title: "Spacious Home in Hyderabad Suburbs",
    formattedPrice: "₹2,400.00",
    reviewCount: 24,
    rating: 3,
    propertyType: "rent"
  },
  {
    id: 12,
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Cozy Home with Scenic View",
    beds: 2,
    baths: 1,
    title: "Cozy Home in Kolkata Suburbs",
    formattedPrice: "₹1,500.00",
    reviewCount: 44,
    rating: 4,
    propertyType: "rent"
  },
  {
    id: 13,
    imageUrl:
      "https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Luxurious Home with Poolside View",
    beds: 4,
    baths: 2,
    title: "Luxurious Home in Pune Suburbs",
    formattedPrice: "₹1,800.00",
    reviewCount: 37,
    rating: 5,
    propertyType: "sell"
  },
  {
    id: 14,
    imageUrl:
      "https://images.unsplash.com/photo-1613553497126-a44624272024?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Chic Home with Modern Interiors",
    beds: 2,
    baths: 2,
    title: "Chic Home in Bangalore City",
    formattedPrice: "₹1,200.00",
    reviewCount: 25,
    rating: 3,
    propertyType: "rent"
  },
  {
    id: 15,
    imageUrl:
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    imageAlt: "Modern Home with City Skyline View",
    beds: 1,
    baths: 1,
    title: "Modern Home in Chennai City",
    formattedPrice: "₹900.00",
    reviewCount: 12,
    rating: 3,
    propertyType: "rent"
  },
  {
    id: 16,
    imageUrl:
      "https://images.unsplash.com/photo-1600047508788-786f3865b4b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Elegant Home with Garden View",
    beds: 3,
    baths: 2,
    title: "Elegant Home in Mumbai City",
    formattedPrice: "₹1,700.00",
    reviewCount: 29,
    rating: 3,
    propertyType: "rent"
  },
  {
    id: 17,
    imageUrl:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Spacious Home with Panoramic View",
    beds: 5,
    baths: 3,
    title: "Spacious Home in Delhi City",
    formattedPrice: "₹2,500.00",
    reviewCount: 37,
    rating: 5,
    propertyType: "sell"
  },
  {
    id: 18,
    imageUrl:
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Cozy Home with Modern Interiors",
    beds: 2,
    baths: 1,
    title: "Cozy Home in Kolkata Suburbs",
    formattedPrice: "₹800.00",
    reviewCount: 10,
    rating: 2,
    propertyType: "sell"
  },
  {
    id: 19,
    imageUrl:
      "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Modern Home with Scenic View",
    beds: 3,
    baths: 2,
    title: "Modern Home in Pune City",
    formattedPrice: "₹1,650.00",
    reviewCount: 44,
    rating: 4,
    propertyType: "rent"
  },
  {
    id: 20,
    imageUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80",
    imageAlt: "Stylish Apartment with City View",
    beds: 2,
    baths: 2,
    title: "Stylish Apartment in Bangalore City",
    formattedPrice: "₹1,200.00",
    reviewCount: 24,
    rating: 3,
    propertyType: "sell"
  },
  {
    id: 21,
    imageUrl:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Modern Home with Garden View",
    beds: 4,
    baths: 2,
    title: "Modern Home in Chennai City",
    formattedPrice: "₹1,800.00",
    reviewCount: 36,
    rating: 4,
    propertyType: "rent"
  },
];

export default Data;
