// fetch("https://61fcfec8f62e220017ce4280.mockapi.io/kiyim-kechak/qishkiKiyimlar")
// .then(response => response.json())
// .then(json => console.log(json))




const taomlar = document.querySelector('.taomlar');

const data = [
    {
        img: './imgs/Rectangle 9.png',
        nomi: 'Smashed Avo',
        tanlash: 'Buyurish',
    },
    {
        img: './imgs/Rectangle 10.png',
        nomi: 'Smashed Avo',
        tanlash: 'Buyurish',
    },
    {
        img: './imgs/Rectangle 11.png',
        nomi: 'Smashed Avo',
        tanlash: 'Buyurish',
    },
    {
        img: './imgs/Rectangle 12.png',
        nomi: 'Smashed Avo',
        tanlash: 'Buyurish',
    },
    {
        img: './imgs/Rectangle 13.png',
        nomi: 'Smashed Avo',
        tanlash: 'Buyurish',
    },
    {
        img: './imgs/Rectangle 14.png',
        nomi: 'Smashed Avo',
        tanlash: 'Buyurish',
    },
    {
        img: './imgs/Rectangle 15.png',
        nomi: 'Smashed Avo',
        tanlash: 'Buyurish',
    },
    {
        img: './imgs/Rectangle 16.png',
        nomi: 'Smashed Avo',
        tanlash: 'Buyurish',
    },
    
]

data.map((item) =>{
    taomlar.innerHTML +=`
    <div class="otadv">
    <img src="${item.img}" alt="">
    <span>${item.nomi}</span>
    <button>${item.tanlash}</button>
    </div>
    
    
    `
})
