export interface Package {
    id: number;
    title: string;
    duration: string;
    price: string;
    theme: string;
    highlight: string;
    img: string;
    location: string;
    itinerary: { day: number; plan: string }[];
}

export const packages: Package[] = [
    {
        id: 1,
        title: "3-Day Express Triangle",
        duration: "3 Days",
        price: "₹24,800",
        theme: "Short Tours",
        highlight: "For busy pulse-takers. Delhi, Agra, and Jaipur in a high-speed VIP sprint.",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg",
        location: "Golden Triangle",
        itinerary: [
            { day: 1, plan: "Arrive in Delhi. Afternoon tour of Qutub Minar & Lotus Temple. Late night drive to Agra." },
            { day: 2, plan: "Sunrise at Taj Mahal. Breakfast & drive to Jaipur via Fatehpur Sikri. Evening at Chokhi Dhani." },
            { day: 3, plan: "Amber Fort elephant ride. Quick stop at Hawa Mahal and Jantar Mantar. Afternoon departure to Delhi." }
        ]
    },
    {
        id: 2,
        title: "4-Day Classic Circle",
        duration: "4 Days",
        price: "₹33,100",
        theme: "Short Tours",
        highlight: "The perfect introduction. Dedicated time for the 'Big Three' monuments.",
        img: "/tour_agra_fort.png",
        location: "Golden Triangle",
        itinerary: [
            { day: 1, plan: "Delhi Arrival & Heritage Walk in Old Delhi (Chandni Chowk, Red Fort)." },
            { day: 2, plan: "Morning drive to Agra. Sunset visit to the Taj Mahal. Overnight in Agra." },
            { day: 3, plan: "Agra Fort. Morning drive to Jaipur via Fatehpur Sikri. Afternoon at City Palace." },
            { day: 4, plan: "Amer Fort & Hawa Mahal. Shopping in Pink City markets. Evening departure." }
        ]
    },
    {
        id: 11,
        title: "5-Day Heritage Loop",
        duration: "5 Days",
        price: "₹41,400",
        theme: "Short Tours",
        highlight: "A deeper dive into the Mughal history with evening sound & light shows.",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg",
        location: "Golden Triangle",
        itinerary: [
            { day: 1, plan: "Delhi Sightseeing: Humayun's Tomb, India Gate, Parliament Street." },
            { day: 2, plan: "Drive to Agra. Itimad-ud-Daulah (Baby Taj). Sunset Agra Fort." },
            { day: 3, plan: "Sunrise Taj Mahal. Mehtab Bagh. Drive to Jaipur. Overnight in Jaipur." },
            { day: 4, plan: "Full day Jaipur: Amer Fort, Jaigarh Fort, Nahargarh Fort sunset view." },
            { day: 5, plan: "Jantar Mantar & Hawa Mahal. Lunch at a Heritage Haveli. Drive back to Delhi." }
        ]
    },
    {
        id: 12,
        title: "5-Day Luxury Weekend",
        duration: "5 Days",
        price: "₹66,300",
        theme: "Luxury",
        highlight: "Stay at the Oberoi and Taj palaces with helicopter transfers available.",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg",
        location: "Golden Triangle",
        itinerary: [
            { day: 1, plan: "Private flight to Delhi. VIP airport pickup and stay at The Oberoi New Delhi." },
            { day: 2, plan: "Helicopter transfer to Agra. Stay at Amarvilas with balcony view of Taj Mahal." },
            { day: 3, plan: "Private sunrise Taj Mahal tour. Private drive to Jaipur. Stay at Rambagh Palace." },
            { day: 4, plan: "Hot air balloon breakfast over Jaipur. Private palace tours and royal dining." },
            { day: 5, plan: "Spa morning at the palace. Afternoon private jet/charter flight to Delhi/Home." }
        ]
    },
    {
        id: 3,
        title: "GT + Udaipur Romance",
        duration: "9 Days",
        price: "₹74,600",
        theme: "Luxury",
        highlight: "Lakes and Palaces extension. The Venice of the East meets the Golden Triangle.",
        img: "/tour_udaipur_lake.png",
        location: "Rajasthan",
        itinerary: [
            { day: 1, plan: "Delhi Arrival & Luxury Stay. Evening Rickshaw tour." },
            { day: 2, plan: "Full day Delhi history tour. Evening classical music concert." },
            { day: 3, plan: "Superfast train to Agra. Taj Mahal & Agra Fort. Overnight Agra." },
            { day: 4, plan: "Drive to Jaipur. Stop at Abhaneri Stepwells. Evening Jaipur Market." },
            { day: 5, plan: "Jaipur Forts tour. Royal Dinner at Jal Mahal. Overnight Jaipur." },
            { day: 6, plan: "Flight to Udaipur. Boat ride on Lake Pichola at sunset." },
            { day: 7, plan: "City Palace Udaipur tour. Stay at the Lake Palace (Jag Niwas)." },
            { day: 8, plan: "Jagdish Temple & Saheliyon ki bari. Cooking class with a Rajput family." },
            { day: 9, plan: "Morning at leisure by the lake. Afternoon flight back to Delhi." }
        ]
    },
    {
        id: 4,
        title: "GT + Rishikesh Yoga",
        duration: "9 Days",
        price: "₹66,300",
        theme: "Spiritual",
        highlight: "Ganges Aarti and private Yoga sessions at the foothills of the Himalayas.",
        img: "/tour_rishikesh_ganges.png",
        location: "Himalayas",
        itinerary: [
            { day: 1, plan: "Delhi Arrival & Spiritual briefing. Evening at Birla Mandir." },
            { day: 2, plan: "Delhi to Haridwar by train. Evening Ganga Aarti at Har-ki-Pauri." },
            { day: 3, plan: "Haridwar to Rishikesh. Check-in at Ashrams. Evening Yoga by the bank." },
            { day: 4, plan: "Sunrise meditation. Visit Vashistha cave. Evening Aarti at Parmarth Niketan." },
            { day: 5, plan: "Nature trek & bridge crossing (Laxman Jhula). Forest meditation session." },
            { day: 6, plan: "Rishikesh to Delhi. Overnight in Delhi. Rest." },
            { day: 7, plan: "Drive to Agra. Taj Mahal sunset. Overnight in Agra." },
            { day: 8, plan: " Fatehpur Sikri & Drive to Jaipur. Chokhi Dhani evening." },
            { day: 9, plan: "Jaipur City Tour & Afternoon flight to Delhi/Home." }
        ]
    },
    {
        id: 5,
        title: "GT + Amritsar Heritage",
        duration: "8 Days",
        price: "₹58,000",
        theme: "Spiritual",
        highlight: "Visit the Golden Temple and the patriotic Wagah Border ceremony.",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg",
        location: "North India",
        itinerary: [
            { day: 1, plan: "Delhi Arrival. Evening at Gurudwara Bangla Sahib." },
            { day: 2, plan: "Delhi to Amritsar by Shatabdi Express. Golden Temple night view." },
            { day: 3, plan: "Golden Temple at sunrise. Jallianwala Bagh. Wagah Border ceremony." },
            { day: 4, plan: "Amritsar to Delhi. Overnight in New Delhi." },
            { day: 5, plan: "Delhi to Agra. Afternoon Agra Fort. Sunset Taj Mahal view from Mehtab Bagh." },
            { day: 6, plan: "Taj Mahal tour. Drive to Jaipur via Fatehpur Sikri and Stepwells." },
            { day: 7, plan: "Jaipur City tour: Amber Fort, City Palace, Hawa Mahal." },
            { day: 8, plan: "Jaipur Markets & High tea at Nahargarh Fort. Evening departure." }
        ]
    },
    {
        id: 13,
        title: "GT + Jodhpur Sun City",
        duration: "8 Days",
        price: "₹70,500",
        theme: "Luxury",
        highlight: "Explore the Blue City and the mighty Mehrangarh Fort.",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg",
        location: "Rajasthan",
        itinerary: [
            { day: 1, plan: "Delhi Arrival. Evening cultural walk." },
            { day: 2, plan: "Delhi City tour & evening drive to Agra." },
            { day: 3, plan: "Sunrise Taj Mahal. Agra Fort. Evening train to Jaipur." },
            { day: 4, plan: "Jaipur Pink City tour: Amer Fort & Hawa Mahal." },
            { day: 5, plan: "Jaipur to Jodhpur by road. Evening visit to Umaid Bhawan Palace." },
            { day: 6, plan: "Mehrangarh Fort & Jaswant Thada. Blue City walk." },
            { day: 7, plan: "Village Safari & Bishnoi community visit. Sunset desert tea." },
            { day: 8, plan: "Jodhpur to Delhi Flight. Afternoon departure." }
        ]
    },
    {
        id: 14,
        title: "GT + Khajuraho Art",
        duration: "8 Days",
        price: "₹62,200",
        theme: "Spiritual",
        highlight: "The UNESCO temples of Khajuraho mixed with the Golden Circuit.",
        img: "/tour_khajuraho.png",
        location: "Central India",
        itinerary: [
            { day: 1, plan: "Delhi Arrival & half day sightseeing." },
            { day: 2, plan: "Delhi to Khajuraho by flight. Western group of temples." },
            { day: 3, plan: "Eastern group of temples. Flight back to Delhi. Overnight in Delhi." },
            { day: 4, plan: "Delhi to Agra. Taj Mahal & evening Mughlai dinner." },
            { day: 5, plan: "Agra Fort. Drive to Jaipur. Abhaneri stopover." },
            { day: 6, plan: "Jaipur Heritage tour & elephant village visit." },
            { day: 7, plan: "Jantar Mantar & Hawa Mahal. Afternoon leisure/shopping." },
            { day: 8, plan: "Jaipur to Delhi. Final departure." }
        ]
    },
    {
        id: 15,
        title: "GT + Pushkar Culture",
        duration: "7 Days",
        price: "₹49,700",
        theme: "Spiritual",
        highlight: "The world's only Brahma temple and the sacred Pushkar lake.",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg",
        location: "Rajasthan",
        itinerary: [
            { day: 1, plan: "Delhi Arrival. Visit Raj Ghat & India Gate." },
            { day: 2, plan: "Delhi to Agra. Sunset Taj Mahal visit." },
            { day: 3, plan: "Sunrise at Taj Mahal. Agra Fort. Drive to Jaipur." },
            { day: 4, plan: "Jaipur City Tour. Evening drive to Pushkar." },
            { day: 5, plan: "Brahma Temple visit & Pushkar Lake session. Evening camel safari." },
            { day: 6, plan: "Pushkar to Jaipur. Shopping in Pink City markets." },
            { day: 7, plan: "Jaipur to Delhi. Final departure." }
        ]
    },
    {
        id: 10,
        title: "Wildlife & Wonders",
        duration: "8 Days",
        price: "₹70,500",
        theme: "Wildlife",
        highlight: "Golden Triangle + Ranthambore Tiger Safari. Hunt for stripes.",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg",
        location: "Rajasthan",
        itinerary: [
            { day: 1, plan: "Delhi Arrival. Full day heritage exploration." },
            { day: 2, plan: "Delhi to Agra. Taj Mahal in the afternoon." },
            { day: 3, plan: "Sunrise Agra Fort. Drive to Ranthambore Safari camp." },
            { day: 4, plan: "Early morning Jungle Safari in search of Tigers. Afternoon jungle trek." },
            { day: 5, plan: "Sunrise Jungle Safari. Morning drive to Jaipur." },
            { day: 6, plan: "Jaipur Heritage tour. Amer Fort & Jaigarh Fort." },
            { day: 7, plan: "City Palace & Hawa Mahal. Afternoon Jaipur artisan walk." },
            { day: 8, plan: "Jaipur to Delhi. Final departure." }
        ]
    },
    {
        id: 16,
        title: "GT + Lucknow Royal",
        duration: "8 Days",
        price: "₹66,300",
        theme: "Luxury",
        highlight: "The city of Nawabs, Awadhi cuisine, and sophisticated manners.",
        img: "/tour_lucknow.png",
        location: "North India",
        itinerary: [
            { day: 1, plan: "Delhi Arrival & Luxury Stay." },
            { day: 2, plan: "Delhi to Agra. Taj Mahal & Agra Fort." },
            { day: 3, plan: "Drive to Lucknow. Check-in at a Heritage Haveli. Evening kebab walk." },
            { day: 4, plan: "Bara Imambara, Chhota Imambara, and Residency ruins tour." },
            { day: 5, plan: "Lucknow to Delhi. Overnight stay." },
            { day: 6, plan: "Delhi to Jaipur. Pink City evening walk." },
            { day: 7, plan: "Amber Fort & City Palace tour." },
            { day: 8, plan: "Jaipur departure." }
        ]
    },
    {
        id: 17,
        title: "GT + Haridwar Sacred",
        duration: "7 Days",
        price: "₹45,600",
        theme: "Spiritual",
        highlight: "The gateway to the Gods. Witness the grand Ganga Aarti.",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg",
        location: "Himalayas",
        itinerary: [
            { day: 1, plan: "Delhi Arrival. Half day tour of spiritual monuments." },
            { day: 2, plan: "Delhi to Haridwar by road. Evening Ganga Aarti at Har Ki Pauri." },
            { day: 3, plan: "Mansha Devi Temple visit & local ashram walk. Evening drive to Delhi." },
            { day: 4, plan: "Delhi to Agra. Sunset Taj Mahal visit." },
            { day: 5, plan: "Morning Agra Fort. Drive to Jaipur. Abhaneri stopover." },
            { day: 6, plan: "Jaipur Heritage tour including Hawa Mahal and Amber Fort." },
            { day: 7, plan: "Jaipur to Delhi departure." }
        ]
    },
    {
        id: 6,
        title: "GT + Goa Beach Holiday",
        duration: "12 Days",
        price: "₹1,07,800",
        theme: "Luxury",
        highlight: "Culture followed by white sands. The ultimate North-South India experience.",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg",
        location: "Goa",
        itinerary: [
            { day: 1, plan: "Delhi Arrival & stay at 5-star hotel." },
            { day: 2, plan: "Full day Delhi history & food tour." },
            { day: 3, plan: "Morning superfast to Agra. Taj Mahal Afternoon visit." },
            { day: 4, plan: "Sunrise Agra Fort. Drive to Jaipur. evening at leisure." },
            { day: 5, plan: "Jaipur Heritage tour & boutique shopping." },
            { day: 6, plan: "Jaipur to Goa flight. Airport transfer to luxury resort." },
            { day: 7, plan: "North Goa Heritage: Churches & Fort Aguada." },
            { day: 8, plan: "Goa Beach Leisure Day. Private beach dinner." },
            { day: 9, plan: "South Goa: Palolem beach & spiritual temples." },
            { day: 10, plan: "Goa Spice Garden tour & Elephant swim." },
            { day: 11, plan: "Leisure day by the ocean. Spa treatments." },
            { day: 12, plan: "Goa to Home departure." }
        ]
    },
    {
        id: 7,
        title: "Medical Recovery Tour",
        duration: "15 Days",
        price: "₹1,32,700",
        theme: "Medical",
        highlight: "Slow-paced luxury transit with 24/7 wellness care and concierge.",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg",
        location: "Golden Triangle",
        itinerary: [
            { day: 1, plan: "Delhi Arrival & Medical Concierge briefing. Hospital visit if needed." },
            { day: 2, plan: "Wellness consultation. Light garden walk in Lodhi Gardens." },
            { day: 3, plan: "Gentle pulse tour of Old Delhi. Rest periods included." },
            { day: 4, plan: "Rest day with physiotherapy session." },
            { day: 5, plan: "Delhi to Agra. Low-stress luxury vehicle transit. Evening Taj sunset from a private veranda." },
            { day: 6, plan: "Morning garden visit near Taj Mahal. Relaxed hotel stay." },
            { day: 7, plan: "Agra to Jaipur. Scenic drive with medical stopovers. Royal stay." },
            { day: 8, plan: "Jaipur City Palace & Hawa Mahal (accessible route). Afternoon Spa session." },
            { day: 9, plan: "Full day of luxury ayurvedic treatments & health diet plan." },
            { day: 10, plan: "Jaipur Amber fort (Jeep ride, no climb). Afternoon rest." },
            { day: 11, plan: "Cultural show in hotel gardens. Relaxation by pool." },
            { day: 12, plan: "Jaipur to Delhi slow transit. Overnight Delhi." },
            { day: 13, plan: "Final checkups & shopping for wellness products." },
            { day: 14, plan: "Leisure morning. Afternoon city light-walk." },
            { day: 15, plan: "Medical concierge airport escort. Final Departure." }
        ]
    },
    {
        id: 18,
        title: "GT + Munnar Nature",
        duration: "14 Days",
        price: "₹1,57,600",
        theme: "Wildlife",
        highlight: "From the dry forts of Rajasthan to the tea hills of Kerala.",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg",
        location: "South India",
        itinerary: [
            { day: 1, plan: "Delhi Arrival & Heritage intro." },
            { day: 2, plan: "Delhi City Tour. Evening food tour." },
            { day: 3, plan: "Delhi to Agra. Taj Mahal afternoon visit." },
            { day: 4, plan: "Sunrise Agra Fort. Drive to Jaipur." },
            { day: 5, plan: "Jaipur Heritage tour. Palace & Fort exploration." },
            { day: 6, plan: "Flight from Jaipur to Kochi. Check-in at Fort Kochi heritage hotel." },
            { day: 7, plan: "Kochi to Munnar drive (High range tea hills)." },
            { day: 8, plan: "Munnar tea garden visit & Eravikulam National Park." },
            { day: 9, plan: "Munnar to Thekkady. Elephant safari & Spice plantation." },
            { day: 10, plan: "Periyar Lake boat ride & forest trek." },
            { day: 11, plan: "Thekkady to Alleppey. Overnight luxury houseboat." },
            { day: 12, plan: "Backwater cruise & local village walk." },
            { day: 13, plan: "Alleppey to Kochi. Fort Kochi Chinese fishing nets." },
            { day: 14, plan: "Departure from Kochi." }
        ]
    },
    {
        id: 19,
        title: "GT + Varanasi Eternity",
        duration: "11 Days",
        price: "₹91,200",
        theme: "Spiritual",
        highlight: "The oldest living city. Experience the circle of life on the Ganges.",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg",
        location: "North India",
        itinerary: [
            { day: 1, plan: "Delhi Arrival & Spiritual Briefing. Akshardham Temple visit." },
            { day: 2, plan: "Delhi heritage walk. Evening train to Varanasi." },
            { day: 3, plan: "Varanasi Arrival. Evening Ganga Aarti on the Ghats." },
            { day: 4, plan: "Sunrise boat ride on Ganges. Sarnath visit (where Buddha gave his first sermon)." },
            { day: 5, plan: "Narrow alley tour of Old Kashi. Evening meditation session." },
            { day: 6, plan: "Varanasi to Delhi by Flight. Evening leisure." },
            { day: 7, plan: "Delhi to Agra. Afternoon Agr Fort. Sunset Taj Mahal." },
            { day: 8, plan: "Sunrise Taj Mahal (Inside tour). Drive to Jaipur via specialty stepwells." },
            { day: 9, plan: "Jaipur City Tour. Palace of Winds & Royal Observatory." },
            { day: 10, plan: "Amber Fort trek & afternoon heritage craft session." },
            { day: 11, plan: "Departure from Jaipur/Delhi Flight." }
        ]
    },
    {
        id: 20,
        title: "The Maharaja Circuit",
        duration: "16 Days",
        price: "₹2,07,400",
        theme: "Luxury",
        highlight: "The absolute gold standard. Cover 7 cities with private butler service.",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg",
        location: "Rajasthan",
        itinerary: [
            { day: 1, plan: "Delhi Arrival. VIP transfer to stay at Taj Mahal Hotel New Delhi." },
            { day: 2, plan: "Delhi Curated History Tour. Private dining at a royal residence." },
            { day: 3, plan: "Private drive to Agra. Stay at Oberoi Amarvilas. Taj Mahal Tour." },
            { day: 4, plan: "Sunrise Taj view. Private drive to Jaipur via Fatehpur Sikri. Stay at Rambagh Palace." },
            { day: 5, plan: "Full day Jaipur. Palace VIP tour & evening Polo match." },
            { day: 6, plan: "Private flight to Udaipur. Stay at Lake Palace Jag Niwas." },
            { day: 7, plan: "Udaipur Lakes & Palaces. Sunset boat with butler service." },
            { day: 8, plan: "Drive to Jodhpur via Ranakpur. Stay at Umaid Bhawan Palace." },
            { day: 9, plan: "Jodhpur Fort VIP exploration. Private desert safari." },
            { day: 10, plan: "Jodhpur to Jaisalmer drive. Stay in luxury tented camps." },
            { day: 11, plan: "Sam Sand Dunes sunset & Jaisalmer Fort tour." },
            { day: 12, plan: "Private drive to Bikaner. Stay at Junagarh Fort heritage hotel." },
            { day: 13, plan: "Rat Temple & Bikaner heritage walk. Private flight to Delhi." },
            { day: 14, plan: "Delhi Luxury Day. High-end shopping with a personal stylist." },
            { day: 15, plan: "Relaxed morning. Spa and final celebratory dinner." },
            { day: 16, plan: "Final Luxury departure escort." }
        ]
    },
    {
        id: 21,
        title: "Desert & Palaces",
        duration: "12 Days",
        price: "₹99,500",
        theme: "Spiritual",
        highlight: "Jaisalmer's golden dunes integrated into your Triangle tour.",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg",
        location: "Rajasthan",
        itinerary: [
            { day: 1, plan: "Delhi Arrival & introduction to culture." },
            { day: 2, plan: "Delhi sightseeing and evening superfast to Jaisalmer." },
            { day: 3, plan: "Jaisalmer Arrival. Fort exploration & Gadsisar Lake." },
            { day: 4, plan: "Sam Sand Dunes Camel Safari & folk music around campfire." },
            { day: 5, plan: "Desert lifestyle tour. Evening train back to Jodhpur." },
            { day: 6, plan: "Jodhpur Mehrangarh Fort and Jaswant Thada visit." },
            { day: 7, plan: "Jodhpur to Jaipur drive. Pink City cultural intro." },
            { day: 8, plan: "Amer Fort, City Palace, and Jantar Mantar Jaipur." },
            { day: 9, plan: "Jaipur to Agra via Abhaneri. Evening at leisure." },
            { day: 10, plan: "Taj Mahal Sunrise. Agra Fort Afternoon." },
            { day: 11, plan: "Drive back to Delhi. Evening Farewell dinner." },
            { day: 12, plan: "Final transfer & Departure." }
        ]
    },
    {
        id: 8,
        title: "Royal Wedding Scout",
        duration: "6 Days",
        price: "₹49,700",
        theme: "Luxury",
        highlight: "Professional scouting of high-end palace venues in Jaipur & Agra.",
        img: "/tour_wedding_palace.png",
        location: "Golden Triangle",
        itinerary: [
            { day: 1, plan: "Delhi Arrival. Consultation with wedding planner & luxury car preview." },
            { day: 2, plan: "Delhi to Agra. Visit Taj Khema & Jaypee Palace venues." },
            { day: 3, plan: "Sunrise Taj photoshoot venue checking. Drive to Jaipur. Jai Mahal Palace view." },
            { day: 4, plan: "Jaipur: Samode Palace, Fairmont, and City Palace venue meetings." },
            { day: 5, plan: "Nahargarh Fort & wedding backdrop sessions. Designer lehenga preview." },
            { day: 6, plan: "Drive back to Delhi. Final selection report & Departure." }
        ]
    },
    {
        id: 9,
        title: "Photography Expedition",
        duration: "7 Days",
        price: "₹62,200",
        theme: "Wildlife",
        highlight: "Guided by masters for the best 'Golden Hour' shots in India.",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg",
        location: "Golden Triangle",
        itinerary: [
            { day: 1, plan: "Delhi: Street photography in Chandni Chowk & Jama Masjid." },
            { day: 2, plan: "Delhi to Agra. Sunset silhouette of Taj Mahal from Mehtab Bagh." },
            { day: 3, plan: "Sunrise inside Taj Mahal (No-crowd photography). Agra Fort light-play sessions." },
            { day: 4, plan: "Fatehpur Sikri red sandstone texture shots. Late night drive to Jaipur." },
            { day: 5, plan: "Sunrise at Hawa Mahal. Afternoon Jaipur stepwell (Panna Meena Kund) session." },
            { day: 6, plan: "Jaipur Forts at Golden Hour. Elephant village portraits. Review & editing session." },
            { day: 7, plan: "Pink City market life photography. Return drive to Delhi." }
        ]
    },
    {
        id: 22,
        title: "Kerala Backwater Bliss",
        duration: "7 Days",
        price: "₹53,900",
        theme: "Luxury",
        highlight: "Private houseboats and spice garden retreats in the heart of God's Own Country.",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg",
        location: "South India",
        itinerary: [
            { day: 1, plan: "Kochi Arrival. Chinese Fishing Nets & Fort Kochi walking tour." },
            { day: 2, plan: "Kochi to Munnar. Scenic drive through tea plantations and waterfalls." },
            { day: 3, plan: "Munnar Sightseeing: Eravikulam National Park and Tea Museum." },
            { day: 4, plan: "Munnar to Thekkady. Periyar Wildlife Sanctuary visit and Spice plantation." },
            { day: 5, plan: "Thekkady to Alleppey. Boat check-in for a night in the backwaters." },
            { day: 6, plan: "Alleppey to Kochi. Evening Kathakali dance performance." },
            { day: 7, plan: "Kochi Departure." }
        ]
    },
    {
        id: 23,
        title: "Himachal Heights",
        duration: "8 Days",
        price: "₹45,600",
        theme: "Adventure",
        highlight: "Snow-capped peaks and valley treks through Manali and Shimla.",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg",
        location: "Himalayas",
        itinerary: [
            { day: 1, plan: "Chandigarh Arrival. Drive to Shimla. Evening at The Mall Road." },
            { day: 2, plan: "Shimla Sightseeing: Kufri, Jakhoo Temple and Ridge." },
            { day: 3, plan: "Shimla to Manali via Kullu Valley. Riverside drive." },
            { day: 4, plan: "Manali City Tour: Hadimba Temple & Vashisht Springs." },
            { day: 5, plan: "Solang Valley adventure: Paragliding and snow activities." },
            { day: 6, plan: "Drive through Rohtang Pass (subject to permit) or Atal Tunnel." },
            { day: 7, plan: "Manali to Chandigarh. Evening at Rock Garden." },
            { day: 8, plan: "Chandigarh Departure." }
        ]
    },
    {
        id: 24,
        title: "Sikkim Silk Route",
        duration: "6 Days",
        price: "₹49,700",
        theme: "Adventure",
        highlight: "High-altitude lakes and ancient monasteries on the border of Tibet.",
        img: "/wellness.png",
        location: "North East",
        itinerary: [
            { day: 1, plan: "Bagdogra Arrival. Drive to Gangtok. Evening at MG Marg." },
            { day: 2, plan: "Gangtok Local: Rumtek Monastery & Enchey Monastery." },
            { day: 3, plan: "Tsomgo Lake & Baba Mandir. Scenic high-altitude drive." },
            { day: 4, plan: "Gangtok to Pelling. Views of Mt. Kanchenjunga." },
            { day: 5, plan: "Pelling Local: Skywalk and Rabdentse Ruins." },
            { day: 6, plan: "Pelling to Bagdogra Departure." }
        ]
    },
    {
        id: 25,
        title: "Tamil Nadu Temple Trail",
        duration: "9 Days",
        price: "₹74,600",
        theme: "Spiritual",
        highlight: "Dravidian architecture and 1000-year-old temples across Madurai and Tanjore.",
        img: "/jaipur-mahal.png",
        location: "South India",
        itinerary: [
            { day: 1, plan: "Chennai Arrival. Visit Kapaleeshwarar Temple." },
            { day: 2, plan: "Chennai to Mahabalipuram. Shore Temple & Five Rathas." },
            { day: 3, plan: "Mahabalipuram to Pondicherry. Auroville and French Quarter walk." },
            { day: 4, plan: "Pondicherry to Tanjore. Brihadisvara Temple (UNESCO)." },
            { day: 5, plan: "Tanjore to Madurai. Meenakshi Amman Temple evening ceremony." },
            { day: 6, plan: "Madurai to Rameshwaram. Pamban Bridge & Temple visit." },
            { day: 7, plan: "Rameshwaram to Kanyakumari. Sunset at the tip of India." },
            { day: 8, plan: "Vivekananda Rock Memorial & Thiruvalluvar Statue." },
            { day: 9, plan: "Drive to Trivandrum Departure." }
        ]
    },
    {
        id: 26,
        title: "Ladakh Leh Expedition",
        duration: "10 Days",
        price: "₹99,500",
        theme: "Adventure",
        highlight: "The land of high passes. Pangong Lake and Nubra Valley camel treks.",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg",
        location: "Himalayas",
        itinerary: [
            { day: 1, plan: "Leh Arrival. Full day rest for acclimatization." },
            { day: 2, plan: "Leh Local: Shanti Stupa & Leh Palace." },
            { day: 3, plan: "Leh to Nubra Valley via Khardung La (Highest Motorable Road)." },
            { day: 4, plan: "Nubra Valley: Hunder Sand Dunes & Diskit Monastery." },
            { day: 5, plan: "Nubra to Pangong Lake via Shyok River. Sunset by the azure water." },
            { day: 6, plan: "Early morning at Pangong. Drive back to Leh via Chang La." },
            { day: 7, plan: "Leh to Sham Valley: Magnetic Hill & Confluence of Indus-Zanskar." },
            { day: 8, plan: "Monastery Tour: Hemis and Thiksey Monasteries." },
            { day: 9, plan: "Leh Market exploration & shopping." },
            { day: 10, plan: "Leh Departure." }
        ]
    },
    {
        id: 27,
        title: "Goa Coastal Escape",
        duration: "5 Days",
        price: "₹33,100",
        theme: "Short Tours",
        highlight: "Sun, sand, and Portuguese heritage in a compact tropical break.",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg",
        location: "Goa",
        itinerary: [
            { day: 1, plan: "Goa Arrival. Evening at Baga Beach." },
            { day: 2, plan: "North Goa: Fort Aguada and vagator Beach." },
            { day: 3, plan: "South Goa: Old Goa Churches and Mangueshi Temple." },
            { day: 4, plan: "Full day at Palolem Beach. Evening Sunset cruise." },
            { day: 5, plan: "Goa Departure." }
        ]
    },
    {
        id: 28,
        title: "Andaman Island Adventure",
        duration: "7 Days",
        price: "₹78,800",
        theme: "Luxury",
        highlight: "Pristine white beaches and world-class scuba diving in Havelock Island.",
        img: "/wellness.png",
        location: "Islands",
        itinerary: [
            { day: 1, plan: "Port Blair Arrival. Cellular Jail Sound & Light Show." },
            { day: 2, plan: "Port Blair to Havelock Island via Cruise. Radhanagar Beach sunset." },
            { day: 3, plan: "Elephanta Beach: Snorkeling and Water Sports." },
            { day: 4, plan: "Havelock to Neil Island. Bharatpur and Laxmanpur Beach." },
            { day: 5, plan: "Return to Port Blair. Visit Ross Island & North Bay." },
            { day: 6, plan: "Port Blair Local Sightseeing." },
            { day: 7, plan: "Port Blair Departure." }
        ]
    },
    {
        id: 29,
        title: "Meghalaya Monsoon Mist",
        duration: "6 Days",
        price: "₹41,400",
        theme: "Nature",
        highlight: "Living root bridges and the wettest places on earth.",
        img: "/wellness.png",
        location: "North East",
        itinerary: [
            { day: 1, plan: "Guwahati Arrival. Drive to Shillong. Umiam Lake." },
            { day: 2, plan: "Shillong to Cherrapunji. Nohkalikai Falls & Seven Sister Falls." },
            { day: 3, plan: "Double Decker living root bridge trek (Full day)." },
            { day: 4, plan: "Cherrapunji to Mawlynnong (Cleanest village) & Dawki Lake." },
            { day: 5, plan: "Drive back to Shillong. Laitlum Canyons." },
            { day: 6, plan: "Shillong to Guwahati Departure." }
        ]
    },
    {
        id: 30,
        title: "Gujarat Rann Utsav",
        duration: "5 Days",
        price: "₹58,000",
        theme: "Spiritual",
        highlight: "The Great White Desert under the moonlight. Hand-crafted culture.",
        img: "/taj-golden.png",
        location: "West India",
        itinerary: [
            { day: 1, plan: "Bhuj Arrival. Visit Aina Mahal and Prag Mahal." },
            { day: 2, plan: "Bhuj to Dhordo (Rann of Kutch). Evening in the White Desert." },
            { day: 3, plan: "Kalo Dungar (Black Hill) and Gandhi ni Gam artisan village." },
            { day: 4, plan: "Mandvi Beach visit & Vijay Vilas Palace." },
            { day: 5, plan: "Bhuj Departure." }
        ]
    },
    {
        id: 31,
        title: "Karnataka Hampi Heritage",
        duration: "7 Days",
        price: "₹49,700",
        theme: "Spiritual",
        highlight: "The ruins of the Vijayanagara Empire and stone-carved wonders.",
        img: "/jaipur-mahal.png",
        location: "South India",
        itinerary: [
            { day: 1, plan: "Bangalore Arrival. Visit Lalbagh and Palace." },
            { day: 2, plan: "Bangalore to Hampi by road. Evening at Hemakuta Hill." },
            { day: 3, plan: "Virupaksha Temple & Vitthala Temple stone chariot." },
            { day: 4, plan: "Royal Enclosure and Lotus Mahal exploration." },
            { day: 5, plan: "Hampi to Badami via Pattadakal and Aihole ruins." },
            { day: 6, plan: "Badami Cave Temples and Agastya Lake." },
            { day: 7, plan: "Badami to Hubli Departure." }
        ]
    }
];
