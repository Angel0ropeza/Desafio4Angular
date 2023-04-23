import { Component } from '@angular/core';

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.scss']
})
export class CartasComponent {
  nombreArticulo = '';
  precioArticulo = 0;
  tipoEnvioArticulo = '';
  imagenURLarticulo = '';
  descriptionArticulo = '';
  idProductoArticulo = '';
  productos = [
    // mayores a $100
    {
      titulo: "Blue-Eyes Shining Dragon - Retro Pack 2 (RP02)",
      precio: 1499.99,
      tipoEnvio: "VIP",
      imagenURL: "https://product-images.tcgplayer.com/fit-in/437x437/78268.jpg",
      description: "This card cannot be Normal Summoned or Set. This card cannot be Special Summoned except by Tributing 1 Blue-Eyes Ultimate Dragon you control. This card gains 300 ATK for each Dragon-Type monster in your Graveyard. You can negate the effects of Spells, Traps, and Effect Monsters that target this card",
      id: "1"
    },
    {
      titulo: "Stardust Dragon (Starlight Rare) - Dawn of Majesty (DAMA)",
      precio: 739.37,
      tipoEnvio: "Delivery",
      imagenURL: "https://product-images.tcgplayer.com/fit-in/437x437/245854.jpg",
      description: " Tuner + 1+ non-Tuner monsters When a card or effect is activated that would destroy a card(s) on the field (Quick Effect): You can Tribute this card; negate the activation, and if you do, destroy it. During the End Phase, if this effect was activated this turn (and was not negated): You can Special Summon this card from your GY",
      id: "2"
    },
    {
      titulo: "Exodia the Forbidden One (Starlight Rare) - Battles of Legend: Crystal Revenge (BLCR)",
      precio: 635.12,
      tipoEnvio: "Express",
      imagenURL: "https://product-images.tcgplayer.com/fit-in/437x437/454002.jpg",
      description: "If you have Right Leg of the Forbidden One, Left Leg of the Forbidden One, Right Arm of the Forbidden One and Left Arm of the Forbidden One in addition to this card in your hand, you win the Duel",
      id: "3"
    },
    {
      titulo: "Dark Magician Girl (Ultra Pharaoh's Rare) - Magnificent Mavens (MAMA)",
      precio: 524.43,
      tipoEnvio: "Por Avion",
      imagenURL: "https://product-images.tcgplayer.com/fit-in/437x437/452921.jpg",
      description: "Gains 300 ATK for every Dark Magician or Magician of Black Chaos in the GYs",
      id: "4"
    },
    {
      titulo: "Dark Magician (Dark Duel Stories) - Yu-Gi-Oh! Video Game Promotional Cards (VDP)",
      precio: 365.00,
      tipoEnvio: "Estandar",
      imagenURL: "https://product-images.tcgplayer.com/fit-in/437x437/22941.jpg",
      description: "The ultimate wizard in terms of attack and defense.",
      id: "5"
    },
    // menor a $100
    {
      titulo: "Elemental HERO Neos (Secret Pharaoh's Rare) - Magnificent Mavens (MAMA)",
      precio: 99.00,
      tipoEnvio: "A pie",
      imagenURL: "https://product-images.tcgplayer.com/fit-in/437x437/453041.jpg",
      description: "A new Elemental HERO has arrived from Neo-Space! When he initiates a Contact Fusion with a Neo-Spacian his unknown powers are unleashed.",
      id: "6"
    },
    {
      titulo: "Mirror Force (Secret Pharaoh's Rare) - Magnificent Mavens (MAMA)",
      precio: 71.07,
      tipoEnvio: "Delivery",
      imagenURL: "https://product-images.tcgplayer.com/fit-in/437x437/453046.jpg",
      description: "When an opponent's monster declares an attack: Destroy all your opponent's Attack Position monsters.",
      id: "7"
    },
    {
      titulo: "Witchcrafter Madame Verre - The Infinity Chasers (INCH)",
      precio: 34.99,
      tipoEnvio: "A pie",
      imagenURL: "https://product-images.tcgplayer.com/fit-in/437x437/186386.jpg",
      description: "During damage calculation, if your Spellcaster monster battles an opponent's monster (Quick Effect): You can reveal any number of Spells with different names in your hand, and if you do, your battling monster gains 1000 ATK/DEF for each card revealed, until the end of this turn. (Quick Effect): You can discard 1 Spell; negate the effects of all face-up monsters your opponent currently controls, until the end of this turn. You can only use each effect of Witchcrafter Madame Verre once per turn.",
      id: "8"
    }
    
  ];
  seleccionarProducto(item: any) {
    this.nombreArticulo = item.titulo;
    this.precioArticulo = item.precio;
    this.tipoEnvioArticulo = item.tipoEnvio;
    this.imagenURLarticulo = item.imagenURL;
    this.descriptionArticulo = item.description;
    this.idProductoArticulo = item.idProducto;

    console.warn('Datos que se envian al precionar click sobre una carta:');
    console.log("nombreArticulo: " + this.nombreArticulo);
    console.log("precioArticulo: " + this.precioArticulo);
    console.log("tipoEnvioArticulo: " + this.tipoEnvioArticulo);
    console.log("imagenURLarticulo: " + this.imagenURLarticulo);
    console.log("descriptionArticulo: " + this.descriptionArticulo);
    console.log("idProductoArticulo: " + this.idProductoArticulo);
  };


}
