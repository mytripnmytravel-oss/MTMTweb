export interface Vehicle {
    id: string;
    name: string;
    type: "SUV" | "Luxury Sedan" | "Executive Sedan" | "Luxury Coach" | "Premium SUV";
    category: "Standard" | "Premium" | "Elite";
    img: string;
    features: string[];
    passengers: number;
    luggage: string;
    description: string;
    priceRange: string;
}

export const fleet: Vehicle[] = [
    {
        id: "innova-crysta",
        name: "Innova Crysta",
        type: "Premium SUV",
        category: "Premium",
        img: "https://images.unsplash.com/photo-1570829194611-71a926d70ff8?q=80&w=1200&auto=format&fit=crop",
        features: ["Dual AC", "Plush Leather", "Wi-Fi", "Chauffeur"],
        passengers: 6,
        luggage: "3-4 bags",
        description: "The gold standard for Indian road travel. Robust, comfortable, and perfect for family tours.",
        priceRange: "$$"
    },
    {
        id: "bmw-5",
        name: "BMW 5 Series",
        type: "Luxury Sedan",
        category: "Elite",
        img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop",
        features: ["Nappa Leather", "Harman Kardon", "Climate Zone", "VIP Status"],
        passengers: 3,
        luggage: "2 bags",
        description: "Experience the Golden Triangle with German engineering and ultimate executive comfort.",
        priceRange: "$$$"
    },
    {
        id: "mercedes-e",
        name: "Mercedes E-Class",
        type: "Luxury Sedan",
        category: "Elite",
        img: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=1200&auto=format&fit=crop",
        features: ["Ambient Lighting", "Burmester Sound", "Panoramic Roof", "White Glove"],
        passengers: 3,
        luggage: "2 bags",
        description: "The peak of luxury chauffeuring. Ideal for high-profile business or anniversary trips.",
        priceRange: "$$$"
    },
    {
        id: "toyota-fortuner",
        name: "Toyota Fortuner",
        type: "Premium SUV",
        category: "Premium",
        img: "https://images.unsplash.com/photo-1524095838546-2d9b8d00f212?q=80&w=1200&auto=format&fit=crop",
        features: ["4x4 Capability", "High Ground Clearance", "Rugged Luxury", "Professional Chauffeur"],
        passengers: 6,
        luggage: "3 bags",
        description: "Command the road with power and presence. Great for longer circuits and varied terrains.",
        priceRange: "$$"
    },
    {
        id: "tempo-12",
        name: "Luxury Tempo (12-Seater)",
        type: "Luxury Coach",
        category: "Premium",
        img: "https://images.unsplash.com/photo-1495433488004-859bdc27b1f4?q=80&w=1200&auto=format&fit=crop",
        features: ["Pilot Seats", "LED TV", "Ice Box", "Individual AC"],
        passengers: 12,
        luggage: "8-10 bags",
        description: "Specifically modified for group luxury. Large windows for sightseeing and ample legroom.",
        priceRange: "$$"
    },
    {
        id: "tempo-17",
        name: "Force Tempo (17-Seater)",
        type: "Luxury Coach",
        category: "Standard",
        img: "https://images.unsplash.com/photo-1596720426673-e4e14290f0cc?q=80&w=1200&auto=format&fit=crop",
        features: ["Pushback Seats", "Stereo System", "Spacious Aisle", "Professional Guide"],
        passengers: 17,
        luggage: "12 bags",
        description: "The reliable choice for larger family groups or corporate site visits.",
        priceRange: "$"
    },
    {
        id: "urbania",
        name: "Force Urbania",
        type: "Luxury Coach",
        category: "Elite",
        img: "https://images.unsplash.com/photo-1544365558-35aa4afcf11f?q=80&w=1200&auto=format&fit=crop",
        features: ["European Design", "Panoramic Vista", "Extra Silent", "Executive Interior"],
        passengers: 13,
        luggage: "10 bags",
        description: "The next generation of luxury coaches in India. Exceptional ride quality and modern tech.",
        priceRange: "$$$"
    },
    {
        id: "mg-gloster",
        name: "MG Gloster",
        type: "Premium SUV",
        category: "Elite",
        img: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=1200&auto=format&fit=crop",
        features: ["ADAS Tech", "Massage Seats", "6-Seater VIP", "Smart Sunroof"],
        passengers: 6,
        luggage: "3 bags",
        description: "A luxury apartment on wheels. Advanced safety and uncompromised comfort.",
        priceRange: "$$$"
    },
    {
        id: "maruti-ciaz",
        name: "Maruti Suzuki Ciaz",
        type: "Executive Sedan",
        category: "Standard",
        img: "https://images.unsplash.com/photo-1607908510714-62c8f96afa1e?q=80&w=1200&auto=format&fit=crop",
        features: ["Efficient AC", "Smooth Ride", "Ample Rear Space", "Local Expert Chauffeur"],
        passengers: 3,
        luggage: "2 bags",
        description: "The efficient and comfortable choice for city transfers and short triangle stays.",
        priceRange: "$"
    },
    {
        id: "coach-large",
        name: "Volvo Luxury Coach",
        type: "Luxury Coach",
        category: "Elite",
        img: "https://images.unsplash.com/photo-1601026968316-caf71eab96d8?q=80&w=1200&auto=format&fit=crop",
        features: ["45 Seats", "Washroom Onboard", "Onboard Pantry", "Air Suspension"],
        passengers: 45,
        luggage: "40 bags",
        description: "The ultimate solution for high-capacity corporate missions or wedding movements.",
        priceRange: "$$$"
    },
    {
        id: "toyota-vellfire",
        name: "Toyota Vellfire",
        type: "Premium SUV",
        category: "Elite",
        img: "https://images.unsplash.com/photo-1521499420147-36d5bfc2781f?q=80&w=1200&auto=format&fit=crop",
        features: ["Electronic Ottoman", "Ambient Roof", "Twin Sunroof", "VIP Chauffeur"],
        passengers: 4,
        luggage: "4 bags",
        description: "The masterpiece of executive travel. Private business lounge experience across the Golden Triangle.",
        priceRange: "$$$$"
    },
    {
        id: "mercedes-s",
        name: "Mercedes S-Class",
        type: "Luxury Sedan",
        category: "Elite",
        img: "https://images.unsplash.com/photo-1609521233053-345bfa8b6f17?q=80&w=1200&auto=format&fit=crop",
        features: ["Massage Seats", "Burmester 4D", "Soft Close Doors", "Red Carpet Service"],
        passengers: 3,
        luggage: "2 bags",
        description: "The world's premier chauffeur-driven car. Reserved for heads of state and elite wedding launches.",
        priceRange: "$$$$"
    },
    {
        id: "kia-carnival",
        name: "Kia Carnival",
        type: "Premium SUV",
        category: "Premium",
        img: "https://images.unsplash.com/photo-1653022779664-3a9d0616548c?q=80&w=1200&auto=format&fit=crop",
        features: ["VIP Limousine Seats", "Dual Sunroof", "Rear Entertainment", "Smart Slide"],
        passengers: 6,
        luggage: "4 bags",
        description: "Ultra-comfortable family transit. Bridging the gap between standard SUVs and elite limousines.",
        priceRange: "$$$"
    },
    {
        id: "audi-a6",
        name: "Audi A6 Matrix",
        type: "Luxury Sedan",
        category: "Elite",
        img: "https://images.unsplash.com/photo-1534184037517-d21b187f20a1?q=80&w=1200&auto=format&fit=crop",
        features: ["Matrix LED", "Bose Surround", "Quattro Drive", "Business Lounge"],
        passengers: 3,
        luggage: "2 bags",
        description: "Sophisticated performance for high-speed northern India circuits. Modern luxury defined.",
        priceRange: "$$$"
    },
    {
        id: "ertiga",
        name: "Maruti Ertiga",
        type: "Executive Sedan",
        category: "Standard",
        img: "https://images.unsplash.com/photo-1521499420147-36d5bfc2781f?q=80&w=1200&auto=format&fit=crop",
        features: ["Hybrid Tech", "Reliable AC", "Flexible Seating", "Local Expert Chauffeur"],
        passengers: 5,
        luggage: "2 bags",
        description: "The efficient and smart choice for small families and budget-conscious heritage hops.",
        priceRange: "$"
    },
    {
        id: "bentley-vintage",
        name: "Vintage Bentley (1950s)",
        type: "Luxury Sedan",
        category: "Elite",
        img: "https://images.unsplash.com/photo-1549923574-571d10215747?q=80&w=1200&auto=format&fit=crop",
        features: ["Heritage Restoration", "Original Leather", "Wedding Decor", "Ceremonial Pilot"],
        passengers: 2,
        luggage: "0 bags",
        description: "The ultimate showstopper for royal weddings and cinematic heritage entries.",
        priceRange: "$$$$$"
    },
    {
        id: "rolls-ghost",
        name: "Rolls Royce Ghost",
        type: "Luxury Sedan",
        category: "Elite",
        img: "https://images.unsplash.com/photo-1522255272218-7ac5249be344?q=80&w=1200&auto=format&fit=crop",
        features: ["Starlight Headliner", "Coach Doors", "Lambswool Carpets", "Supreme Privacy"],
        passengers: 3,
        luggage: "2 bags",
        description: "Absolute silent serenity. The pinnacle of global chauffeuring for VVIP mission execution.",
        priceRange: "$$$$$"
    },
    {
        id: "tempo-9-premium",
        name: "Premium Tempo (9-Seater)",
        type: "Luxury Coach",
        category: "Premium",
        img: "https://images.unsplash.com/photo-1495433488004-859bdc27b1f4?q=80&w=1200&auto=format&fit=crop",
        features: ["Maharaja Seats", "Wooden Finish", "Mini Fridge", "Wi-Fi Hub"],
        passengers: 9,
        luggage: "6 bags",
        description: "Specially modified for small groups seeking Maharaja-style road comfort.",
        priceRange: "$$"
    },
    {
        id: "honda-city",
        name: "Honda City (ZX)",
        type: "Executive Sedan",
        category: "Standard",
        img: "https://images.unsplash.com/photo-1570303278489-041bd897a873?q=80&w=1200&auto=format&fit=crop",
        features: ["Sunroof", "VTEC Performance", "Premium Cabin", "Professional Chauffeur"],
        passengers: 3,
        luggage: "2 bags",
        description: "The classic executive sedan. Perfect for point-to-point transfers in Delhi and Agra.",
        priceRange: "$$"
    },
    {
        id: "electric-coach",
        name: "Eco-Luxury Electric Coach",
        type: "Luxury Coach",
        category: "Premium",
        img: "https://images.unsplash.com/photo-1525962898597-a4ae6402826e?q=80&w=1200&auto=format&fit=crop",
        features: ["Zero Emission", "Silent Drive", "USB Charging", "Panoramic Vision"],
        passengers: 25,
        luggage: "20 bags",
        description: "Sustainable heritage touring. The silent way to explore historical monuments.",
        priceRange: "$$$"
    }
];
