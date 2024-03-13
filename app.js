let data = [
    {
        Make: 'Lexus',
        Model: 'ES',
        Year: '2024'
    },
    {
        Make: 'Mercedes-Benz',
        Model: 'E-Class',
        Year: '2024'
    },
    {
        Make: 'Audi',
        Model: 'A7',
        Year: '2024'
    },
    {
        Make: 'Genesis',
        Model: 'G80',
        Year: '2024'
    },
    {
        Make: 'Maserati',
        Model: 'Ghibli',
        Year: '2024'
    },
    {
        Make: 'Cadillac',
        Model: 'CT5',
        Year: '2024'
    },
    {
        Make: 'Porsche',
        Model: 'Panamera',
        Year: '2023'
    },
    {
        Make: 'BMW',
        Model: '230i Coupe',
        Year: '2024'
    }
];

const info = document.querySelector('#info')

let details = data.map(function(item) {
    return '<div>' + item.Make + '  ' + item.Model + '  ' + item.Year + '</div>';   
});

info.innerHTML = details.join('\n');