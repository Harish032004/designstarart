// categories.js

// Categories definitions
const categoriesData = [
    { id: 1, name: "Indian Icons", image: "https://images.unsplash.com/photo-1608998011475-71cb94314781?auto=format&fit=crop&w=600&q=80" },
    { id: 2, name: "Paintings", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=600&q=80" },
    { id: 3, name: "Wall Hangings", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80" },
    { id: 4, name: "3D Murals", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80" },
    { id: 5, name: "Table Sculptures", image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=600&q=80" },
    { id: 6, name: "Exterior Pots", image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=600&q=80" },
    { id: 7, name: "Sculptures", image: "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=600&q=80" },
    { id: 8, name: "Wall Mirrors", image: "https://images.unsplash.com/photo-1617806118233-18e1db207fa6?auto=format&fit=crop&w=600&q=80" },
    { id: 9, name: "Tea Table Decors", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80" },
    { id: 10, name: "Light Arts", image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=600&q=80" },
    { id: 11, name: "Water Falls", image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=600&q=80" },
    { id: 12, name: "Custom Framed Arts", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80" }
];

// Product Inventory Pool (3 Products per category ID with unique 4-angle image arrays)
const productsData = [
    /* ==========================================
       CATEGORY 1: INDIAN ICONS
       ========================================== */
    { 
        id: 101, categoryId: 1, name: "Vintage Ganesha Relief", regularPrice: 15000, salePrice: 12500, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1608998011475-71cb94314781?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1608998011475-71cb94314781?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1590075865003-e48277afd558?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80"
        ]
    },
    { 
        id: 102, categoryId: 1, name: "Chola Style Bronze Nataraja", regularPrice: 28000, salePrice: 24000, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1608998011475-71cb94314781?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1590075865003-e48277afd558?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80"
        ]
    },
    { 
        id: 103, categoryId: 1, name: "Hand-Carved Buddha Panel", regularPrice: 22000, salePrice: 18200, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1590075865003-e48277afd558?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1590075865003-e48277afd558?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1608998011475-71cb94314781?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=500&q=80"
        ]
    },
     { 
        id: 104, categoryId: 1, name: "Harish", regularPrice: 22000, salePrice: 18200, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1590075865003-e48277afd558?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1590075865003-e48277afd558?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1608998011475-71cb94314781?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=500&q=80"
        ]
    },

    /* ==========================================
       CATEGORY 2: PAINTINGS
       ========================================== */
    { 
        id: 201, categoryId: 2, name: "Artiface", categoryName: "Paintings", regularPrice: 16000, salePrice: 12800, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1579783922514-023692067a8b?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=500&q=80"
        ]
    },
    { 
        id: 202, categoryId: 2, name: "Buddha’s Lotus Embrace", categoryName: "Paintings", regularPrice: 16000, salePrice: 12800, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1579783922514-023692067a8b?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=500&q=80"
        ]
    },
    { 
        id: 203, categoryId: 2, name: "Buddha’s Radiance", categoryName: "Paintings", regularPrice: 16000, salePrice: 12800, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1579783922514-023692067a8b?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1579783922514-023692067a8b?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=500&q=80"
        ]
    },

    /* ==========================================
       CATEGORY 3: WALL HANGINGS
       ========================================== */
    { 
        id: 301, categoryId: 3, name: "Geometric Brass Wall Accent", regularPrice: 7000, salePrice: 5400, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80",
            "https://i1-e.pinimg.com/736x/9a/7f/e2/9a7fe2c143b692482d473830c361425c.jpg"
        ]
    },
    { 
        id: 302, categoryId: 3, name: "Macrame Fiber Wall Tapestry", regularPrice: 4500, salePrice: 3200, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80",
           "https://i1-e.pinimg.com/736x/9a/7f/e2/9a7fe2c143b692482d473830c361425c.jpg"
        ]
    },
    { 
        id: 303, categoryId: 3, name: "Metallic Tree of Life Plate", regularPrice: 12000, salePrice: 9800, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1617806118233-18e1db207fa6?auto=format&fit=crop&w=500&q=80"
        ]
    },

    /* ==========================================
       CATEGORY 4: 3D MURALS
       ========================================== */
    { 
        id: 401, categoryId: 4, name: "Botanical Clay 3D Mural", regularPrice: 38000, salePrice: 32000, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1617806118233-18e1db207fa6?auto=format&fit=crop&w=500&q=80"
        ]
    },
    { 
        id: 402, categoryId: 4, name: "Abstract Plaster Wall Wave", regularPrice: 34000, salePrice: 28500, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1617806118233-18e1db207fa6?auto=format&fit=crop&w=500&q=80"
        ]
    },
    { 
        id: 403, categoryId: 4, name: "Custom Architectural Relief Panel", regularPrice: 52000, salePrice: 45000, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1617806118233-18e1db207fa6?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1617806118233-18e1db207fa6?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80"
        ]
    },

    /* ==========================================
       CATEGORY 5: TABLE SCULPTURES
       ========================================== */
    { 
        id: 501, categoryId: 5, name: "Polished Resin Fish Sculpture", regularPrice: 6000, salePrice: 4200, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1608998011475-71cb94314781?auto=format&fit=crop&w=500&q=80"
        ]
    },
    { 
        id: 502, categoryId: 5, name: "Minimalist Thinker Marble Figurine", regularPrice: 5000, salePrice: 3800, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1608998011475-71cb94314781?auto=format&fit=crop&w=500&q=80"
        ]
    },
    { 
        id: 503, categoryId: 5, name: "Abstract Iron Ribbon Stand", regularPrice: 7500, salePrice: 5100, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1608998011475-71cb94314781?auto=format&fit=crop&w=500&q=80"
        ]
    },

    /* ==========================================
       CATEGORY 6: EXTERIOR POTS
       ========================================== */
    { 
        id: 601, categoryId: 6, name: "Geometric Mono Terracotta Pot", regularPrice: 9000, salePrice: 6500, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1608998011475-71cb94314781?auto=format&fit=crop&w=500&q=80"
        ]
    },
    { 
        id: 602, categoryId: 6, name: "Rustic Stone Finish Tall Urn", regularPrice: 14000, salePrice: 11200, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1608998011475-71cb94314781?auto=format&fit=crop&w=500&q=80"
        ]
    },
    { 
        id: 603, categoryId: 6, name: "Weatherproof Concrete Planter", regularPrice: 11000, salePrice: 8900, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1608998011475-71cb94314781?auto=format&fit=crop&w=500&q=80"
        ]
    },

    /* ==========================================
       CATEGORY 7: SCULPTURES
       ========================================== */
    { 
        id: 701, categoryId: 7, name: "Classic Bust Sculpture", regularPrice: 19000, salePrice: 15000, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1608998011475-71cb94314781?auto=format&fit=crop&w=500&q=80"
        ]
    },
    { 
        id: 702, categoryId: 7, name: "Golden Buddha Head Bust", regularPrice: 17000, salePrice: 13500, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1608998011475-71cb94314781?auto=format&fit=crop&w=500&q=80"
        ]
    },
    { 
        id: 703, categoryId: 7, name: "Contemporary Metal Torso Art", regularPrice: 26000, salePrice: 22000, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1608998011475-71cb94314781?auto=format&fit=crop&w=500&q=80"
        ]
    },

    /* ==========================================
       CATEGORY 8: WALL MIRRORS
       ========================================== */
    { 
        id: 801, categoryId: 8, name: "Floral Brass Accent Mirror", regularPrice: 12000, salePrice: 9500, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1617806118233-18e1db207fa6?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1617806118233-18e1db207fa6?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=500&q=80"
        ]
    },
    { 
        id: 802, categoryId: 8, name: "Sunburst Antiqued Wall Mirror", regularPrice: 16000, salePrice: 12800, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1617806118233-18e1db207fa6?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=500&q=80"
        ]
    },
    { 
        id: 803, categoryId: 8, name: "Baroque Carved Gold Mirror", regularPrice: 20000, salePrice: 16400, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1617806118233-18e1db207fa6?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=500&q=80"
        ]
    },

    /* ==========================================
       CATEGORY 9: TEA TABLE DECORS
       ========================================== */
    { 
        id: 901, categoryId: 9, name: "Minimalist Ceramic Vase Set", regularPrice: 4000, salePrice: 2900, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1617806118233-18e1db207fa6?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80"
        ]
    },
    { 
        id: 902, categoryId: 9, name: "Handcrafted Brass Candle Tray", regularPrice: 5500, salePrice: 4100, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1617806118233-18e1db207fa6?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80"
        ]
    },
    { 
        id: 903, categoryId: 9, name: "Earthy Stone Coaster Stack", regularPrice: 2500, salePrice: 1800, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1617806118233-18e1db207fa6?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1617806118233-18e1db207fa6?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80"
        ]
    },

    /* ==========================================
       CATEGORY 10: LIGHT ARTS
       ========================================== */
    { 
        id: 1001, categoryId: 10, name: "Shadow Illusion Wire Lamp", regularPrice: 11000, salePrice: 8500, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80"
        ]
    },
    { 
        id: 1002, categoryId: 10, name: "Geometric Neon Acrylic Frame", regularPrice: 14000, salePrice: 11500, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80"
        ]
    },
    { 
        id: 1003, categoryId: 10, name: "Warm Ambient Resin Light Orb", regularPrice: 9500, salePrice: 7200, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80"
        ]
    },

    /* ==========================================
       CATEGORY 11: WATER FALLS
       ========================================== */
    { 
        id: 1101, categoryId: 11, name: "Indoor Slate Tiered Fountain", regularPrice: 29000, salePrice: 24500, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=500&q=80"
        ]
    },
    { 
        id: 1102, categoryId: 11, name: "Zen Bamboo Table Fountain", regularPrice: 8500, salePrice: 6200, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=500&q=80"
        ]
    },
    { 
        id: 1103, categoryId: 11, name: "Luxury Metallic Waterfall Wall", regularPrice: 48000, salePrice: 39900, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=500&q=80"
        ]
    },

    /* ==========================================
       CATEGORY 12: CUSTOM FRAMED ARTS
       ========================================== */
    { 
        id: 1201, categoryId: 12, name: "Premium Oak Profile Frame", regularPrice: 9000, salePrice: 6800, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1617806118233-18e1db207fa6?auto=format&fit=crop&w=500&q=80"
        ]
    },
    { 
        id: 1202, categoryId: 12, name: "Museum Anti-Reflective Glass Box", regularPrice: 15000, salePrice: 12200, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1617806118233-18e1db207fa6?auto=format&fit=crop&w=500&q=80"
        ]
    },
    { 
        id: 1203, categoryId: 12, name: "Ornate Vintage Gallery Border", regularPrice: 19500, salePrice: 15800, onSale: true, inStock: true, backorder: false,
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80",
        images: [
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1617806118233-18e1db207fa6?auto=format&fit=crop&w=500&q=80"
        ]
        ,
        
    }
    
];