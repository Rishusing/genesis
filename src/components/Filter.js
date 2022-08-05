import React from 'react'
import FilterByType from './filtertypes/FilterByType'

const Filter = () => {

    const category = [
        { id: 1, name: "Paracetamol Tablets" },
        { id: 2, name: "Paracetamol Syrup" },
        { id: 3, name: "Paracetamol Powder" },
        { id: 4, name: "Paracetamol Capsule" },
        { id: 5, name: "Magaladrate simethicone Oral Suspension" },
        { id: 6, name: "Magaladrate simethicone Oral Suspension" }
    ]

    const brand = [
        { id: 1, name: "Cipmol Paracetamol" },
        { id: 2, name: "Pandal Paracetamol Tablets" },
        { id: 3, name: "Combiflam" },
        { id: 4, name: "Crocin Tablets" },
        { id: 5, name: "Calpol Paracetamol Tablets" },
        { id: 6, name: "Sumo Tablet" }
    ]

    const business = [
        { id: 1, name: "Wholesaler" },
        { id: 2, name: "Manufacturer" },
        { id: 3, name: "Retailer" },
        { id: 4, name: "Exporter" }
    ];

    const strength = [
        { id: 1, name: "500 mg" },
        { id: 2, name: "650 mg" },
        
    ];

    const manufacturer = [
        { id: 1, name: "Intas Pharmaceutical Ltd" },
        { id: 2, name: "Alkem Laboratories Ltd" },
    ];

    const prescription = [
        { id: 1, name: "Intas Pharmaceutical Ltd" },
        { id: 2, name: "Alkem Laboratories Ltd" },
        
    ];

    return (
        <div className='filterCatagory'>
            <FilterByType data={category} head="Related Category" />
            <FilterByType data={brand} head="Related Brands" />
            <FilterByType data={business} head="Business Type" />
            <FilterByType data={strength} head="Strength" />
            <FilterByType data={manufacturer} head="Manufacturer" />
            <FilterByType data={prescription} head="Prescription" />
        </div>
    )
}

export default Filter