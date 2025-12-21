
import { CheckCircle, Trophy, Calendar, DollarSign, FileText } from "lucide-react"

export const grantsData = [
    {
        id: "commissioning-support",
        slug: "commissioning-support",
        title: "Commissioning Support",
        description: "Encouraging artistic innovation and expanding artistic repertoires with grants that support the creation, publication, performance, and recording of new work. Fostering initiatives that push artistic boundaries, experiment with novel forms, and embrace innovation contributing to the evolution and dynamism of the artistic landscape.",
        image: "https://admaf.org/wp-content/uploads/2025/12/Triangle-from-the-Directions-series-at-Art-Dubai-by-the-Emirati-artist-Mohammed-Kazem.jpeg",
        amount: "Up to 50,000 AED",
        dates: [
            { label: "Start Date", value: "1-September-2024" },
            { label: "Submission Deadline", value: "1-December-2024" },
            { label: "Winner announcement", value: "15-January-2025" }
        ],
        guidelines: [
            {
                title: "Funding Areas",
                content: "Performing Arts: Supporting live performances including music, theater, and dance. Visual Arts: Painting, sculpture, photography, and installation art."
            },
            {
                title: "Eligibility",
                content: "Open to UAE nationals and residents. Applicants must be over 18 years of age."
            },
            {
                title: "Exclusions",
                content: "Projects that have already been completed or published. Academic scholarships."
            },
            {
                title: "Funding Process",
                content: "Applications are reviewed by an independent jury. Selected applicants may be invited for an interview."
            },
            {
                title: "Selection Criteria",
                content: "Artistic merit, feasibility, and contribution to the UAE cultural landscape."
            }
        ],
        winners: [
            { image: "/placeholder.svg?height=300&width=300", name: "Winner 1" },
            { image: "/placeholder.svg?height=300&width=300", name: "Winner 2" }
        ]
    },
    {
        id: "cultural-diversity",
        slug: "cultural-diversity",
        title: "Cultural Diversity, Inclusion, and Community Engagement",
        description: "Support for projects that celebrate and promote the diversity of cultural expression within the UAE. Recognizing art and culture initiatives that foster unity, and appreciation for cultural richness and which actively involve and engage local communities with a sense of cultural ownership.",
        image: "https://admaf.org/wp-content/uploads/2023/12/inide-banners.jpg",
        amount: "Up to 40,000 AED",
        dates: [
            { label: "Start Date", value: "1-October-2024" },
            { label: "Submission Deadline", value: "1-January-2025" },
            { label: "Winner announcement", value: "15-February-2025" }
        ],
        guidelines: [
            {
                title: "Funding Areas",
                content: "Projects promoting cultural exchange, community workshops, and inclusive arts programs."
            },
            {
                title: "Eligibility",
                content: "Non-profit organizations, community groups, and individual artists."
            }
        ],
        winners: []
    },
    {
        id: "educational-outreach",
        slug: "educational-outreach",
        title: "Educational Outreach",
        description: "Support for projects that celebrate and promote the diversity of cultural expression within the UAE. Recognizing art and culture initiatives that foster unity, and appreciation for cultural richness and which actively involve and engage local communities with a sense of cultural ownership.",
        image: "https://admaf.org/wp-content/uploads/2023/12/Young-Filmmakers-Circle-small.jpg",
        amount: "Up to 30,000 AED",
        dates: [
            { label: "Start Date", value: "1-September-2024" },
            { label: "Submission Deadline", value: "30-November-2024" },
            { label: "Winner announcement", value: "10-January-2025" }
        ],
        guidelines: [
            {
                title: "Funding Areas",
                content: "School programs, youth workshops, and educational materials."
            }
        ],
        winners: []
    },
    {
        id: "international-mobility",
        slug: "international-mobility",
        title: "International Mobility Support",
        description: "Grants support initiatives with a strong educational component dedicated to promoting learning and skill development within the arts. This ensures the growth and sustainability of creative practices in the UAE.",
        image: "https://admaf.org/wp-content/uploads/2023/12/music.jpg",
        amount: "Up to 25,000 AED",
        dates: [
            { label: "Start Date", value: "Rolling Basis" },
            { label: "Submission Deadline", value: "Ongoing" },
            { label: "Winner announcement", value: "Monthly" }
        ],
        guidelines: [
            {
                title: "Funding Areas",
                content: "Travel support for international festivals, residencies, and conferences."
            }
        ],
        winners: []
    }
]
