import { Component } from '@angular/core';
import { BookmarkService } from '../services/bookmark.service';

@Component({
  selector: 'app-remedies',
  standalone: false,
  
  templateUrl: './remedies.component.html',
  styleUrl: './remedies.component.css'
})
export class RemediesComponent {
  cards = [
    {
      RemedyId: 1,
      RemedyName: 'Honey and Lemon',
      Remediesimg: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rwRstZEVILCTerbSCLTtnAHaE8%26pid%3DApi&f=1&ipt=7580f01270571397a78ec5706688836bc25d429d7be1821f3e762f400abf79e1&ipo=images',
      Description: 'Honey and lemon are commonly used for soothing sore throats. They provide hydration, antibacterial properties, and help reduce irritation.',
      Benefits: 'Fights infections and reduces inflammation.',
      PreperationMethod: 'Mix honey and lemon in warm water.',
      UsageInstructions: 'Drink the mixture to soothe the throat.',
      CategoryId: 2,
      createdBy: 'admin',
      category: 'skin'
    },
    {
      RemedyId: 2,
      RemedyName: 'Ginger Tea',
      Remediesimg: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yZIags--hLbMwv9yjISsTAHaEK%26pid%3DApi&f=1&ipt=4acd70b4693a46d465d05eb75f5b8fc32e5a50644c0e498d9eeac2d3da677830&ipo=images',
      Description: 'Ginger tea is excellent for digestion and provides relief from nausea, bloating, and menstrual cramps.',
      Benefits: 'Fights infections and reduces inflammation.',
      PreperationMethod: 'Steep fresh ginger slices in hot water.',
      UsageInstructions: 'Drink the tea before or after meals for digestion.',
      CategoryId: 2,
      createdBy: 'admin',
      category: 'skin'
    },
    {
      RemedyId: 3,
      RemedyName: 'Turmeric',
      Remediesimg: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.wP8sO5TniPaTfX8KSNvpiAHaE8%26pid%3DApi&f=1&ipt=d8781a8933cf7b91d7bb9de7566cb5a3f05887f6318f0ae7cb6991f176cab650&ipo=images',
      Description: 'Turmeric contains curcumin, which has strong anti-inflammatory and antioxidant effects, helping with arthritis and boosting immunity.',
      Benefits: 'Fights infections and reduces inflammation.',
      PreperationMethod: 'Mix turmeric powder in warm milk or water.',
      UsageInstructions: 'Drink before bedtime for its anti-inflammatory properties.',
      CategoryId: 2,
      createdBy: 'admin',
      category: 'Hair'
    },
    {
      RemedyId: 4,
      RemedyName: 'Garlic',
      Remediesimg: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.lEY1WGqi5APRc3CoI-DMfQHaE7%26pid%3DApi&f=1&ipt=14fe410d01de1d6384a0b78bd9bbf2c3f1be408bd225d97623ed1928cb7a92c7&ipo=images',
      Description: 'Garlic is known for its antiviral and antibacterial properties, making it a great remedy for boosting the immune system.',
      Benefits: 'Fights infections and reduces inflammation.',
      PreperationMethod: 'Crush raw garlic cloves and mix with honey.',
      UsageInstructions: 'Consume 1-2 cloves of garlic daily.',
      CategoryId: 2,
      createdBy: 'admin',
      category: 'Immunity'
    },
    {
      RemedyId: 5,
      RemedyName: 'Chamomile Tea',
      Remediesimg: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.0cvixXSjkHpLxR_OFwPQyQHaGc%26pid%3DApi&f=1&ipt=360406248a9a6318cf8f4f4b1c506c53af0226c92f25a4d353f5cf9e43e5ac45&ipo=images',
      Description: 'Chamomile tea is a natural relaxant, aiding in stress relief and promoting a restful night’s sleep.',
      Benefits: 'Soothes nerves and promotes better sleep.',
      PreperationMethod: 'Steep dried chamomile flowers in hot water.',
      UsageInstructions: 'Drink before bedtime to help with sleep.',
      CategoryId: 2,
      createdBy: 'admin',
      category: 'skin'
    },
    {
      RemedyId: 6,
      RemedyName: 'Lavender Oil',
      Remediesimg: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Z7xyMGQbD178olj0PBKhBAHaF_%26pid%3DApi&f=1&ipt=bff988bcbba1488d338378fb5de0cab68abcf49c2b6245e1314a940012048065&ipo=images',
      Description: 'Lavender oil is widely used in aromatherapy to reduce stress, improve mood, and aid in relaxation.',
      Benefits: 'Reduces anxiety and promotes relaxation.',
      PreperationMethod: 'Use a diffuser to release lavender scent into the air.',
      UsageInstructions: 'Inhale the aroma for 10-15 minutes to relax.',
      CategoryId: 2,
      createdBy: 'Body',
      category: 'skin'
    },
    {
      RemedyId: 7,
      RemedyName: 'Peppermint Tea',
      Remediesimg: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvaya.in%2Frecipes%2Fwp-content%2Fuploads%2F2018%2F05%2FPeppermint-Tea.jpg&f=1&nofb=1&ipt=2b36e7c058cc18f27b24be53eaa147b0602cb57d1c04871500e261bef95fd70d&ipo=images',
      Description: 'Peppermint tea is great for soothing digestion issues and can help relieve tension headaches with its cooling effect.',
      Benefits: 'Relieves headaches and aids digestion.',
      PreperationMethod: 'Steep peppermint leaves in hot water.',
      UsageInstructions: 'Drink after meals to soothe digestion.',
      CategoryId: 2,
      createdBy: 'admin',
      category: 'Body'
    },
    {
      RemedyId: 8,
      RemedyName: 'Apple Cider Vinegar',
      Remediesimg: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.cRN1lobYluSwQDTiiDs8IgHaE7%26pid%3DApi&f=1&ipt=5b122e6e25f788384d9631761a391fce84222057601cc590ab31438300683f18&ipo=images',
      Description: 'Apple cider vinegar is known for balancing gut bacteria, helping digestion, and assisting in weight management.',
      Benefits: 'Improves digestion and boosts metabolism.',
      PreperationMethod: 'Dilute apple cider vinegar with water.',
      UsageInstructions: 'Drink a tablespoon of diluted apple cider vinegar before meals.',
      CategoryId: 2,
      createdBy: 'admin',
      category: 'Body'
    },
    {
      RemedyId: 9,
      RemedyName: 'Eucalyptus Oil',
      Remediesimg: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.TeQD_rLOAJuEoj9wyOnGAwHaE7%26pid%3DApi&f=1&ipt=1ea557f047bb357963c5c271530292e662d81016483211ce5f299aec7ae86450&ipo=images',
      Description: 'Eucalyptus oil is commonly used for treating respiratory conditions such as colds and sinus infections.',
      Benefits: 'Clears sinuses and relieves respiratory symptoms.',
      PreperationMethod: 'Diffuse eucalyptus oil or inhale steam.',
      UsageInstructions: 'Inhale the steam or diffuse the oil in the air.',
      CategoryId: 2,
      createdBy: 'admin',
      category: 'Body'
    },
    {
      RemedyId: 10,
      RemedyName: 'Aloe Vera',
      Remediesimg: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5p3AzMNYvsHws0pvfbg0LgHaE7%26pid%3DApi&f=1&ipt=be682b53fcf0a95ff6898d78a8a01a1be99d70e40e3920c576dbfd59010b2424&ipo=images',
      Description: 'Aloe vera is effective in healing burns, soothing skin irritations, and hydrating the skin.',
      Benefits: 'Fights infections and reduces inflammation.',
      PreperationMethod: 'Apply aloe vera gel directly to affected areas.',
      UsageInstructions: 'Use it topically to soothe burns or skin irritations.',
      CategoryId: 2,
      createdBy: 'admin',
      category: 'skin'
    },
      {
        RemedyId: 11,
        RemedyName: 'Green Tea',
        Remediesimg: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.KWaYlz1dXeIgwc26vQoQPwHaE6%26pid%3DApi&f=1&ipt=4e8423fe17f85202c2c86c9929ebe5081cb82e2037ca862b1a0bcc68d4777791&ipo=images',
        Description: 'Green tea is packed with antioxidants and helps improve brain function, burn fat, and reduce inflammation.',
        Benefits: 'Fights infections and reduces inflammation.',
        PreperationMethod: 'Mix turmeric powder in warm milk.',
        UsageInstructions: 'Drink before bedtime.',
        CategoryId: 2,
        createdBy: 'admin',
        category: 'Body'
      },
      {
        RemedyId: 12,
        RemedyName: 'Clove',
        Remediesimg: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.nR4TkfUR8jN-6EJa9RL7cwHaE7%26pid%3DApi&f=1&ipt=26c652328c656aaf9e9a6a8b99c6dc0e76c9e8a4729a1ad6df9e017090454d21&ipo=images',
        Description: 'Clove is commonly used for toothaches and sore gums due to its analgesic and antibacterial properties.',
        Benefits: 'Fights infections and reduces inflammation.',
        PreperationMethod: 'Mix turmeric powder in warm milk.',
        UsageInstructions: 'Drink before bedtime.',
        CategoryId: 2,
        createdBy: 'admin',
        category: 'skin'
      },
      {
        RemedyId: 13,
        RemedyName: 'Holy Basil (Tulsi)',
        Remediesimg: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.P5PswrTJuFKAIR4pdbrVDgHaEw%26pid%3DApi&f=1&ipt=922a5f64fdc83364e457064548bcbf1fba004600b743d0704be02e86c26abbda&ipo=images',
        Description: 'Holy basil, also known as Tulsi, is an adaptogen that helps the body cope with stress and boosts immune function.',
        Benefits: 'Fights infections and reduces inflammation.',
        PreperationMethod: 'Mix turmeric powder in warm milk.',
        UsageInstructions: 'Drink before bedtime.',
        CategoryId: 2,
        createdBy: 'admin',
        category: 'Body'
      },
      {
        RemedyId: 14,
        RemedyName: 'Fenugreek',
        Remediesimg: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.sRVYLmKGyB7UXWBgYVxougHaE8%26pid%3DApi&f=1&ipt=254c8632a8d7d7aaf7360026e6289fd2cc0df108bd6cefe6f9ef13181813cbd6&ipo=images',
        Description: 'Fenugreek seeds are used for digestive issues and are known for regulating blood sugar levels in diabetics.',
        Benefits: 'Fights infections and reduces inflammation.',
        PreperationMethod: 'Mix turmeric powder in warm milk.',
        UsageInstructions: 'Drink before bedtime.',
        CategoryId: 2,
        createdBy: 'admin',
        category: 'skin'
      },
      {
        RemedyId: 15,
        RemedyName: 'Cinnamon',
        Remediesimg: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.IWa7_7CvOBpWpAemsroyKQHaE8%26pid%3DApi&f=1&ipt=c465ee86a0d8512064761cfceecb5f726b6ab57246fc2e5a185410485e1b08cb&ipo=images',
        Description: 'Cinnamon is known for its anti-inflammatory properties and its ability to improve heart health and control blood sugar.',
        Benefits: 'Fights infections and reduces inflammation.',
        PreperationMethod: 'Mix turmeric powder in warm milk.',
        UsageInstructions: 'Drink before bedtime.',
        CategoryId: 2,
        createdBy: 'admin',
        category: 'Immunity'
      },
      {
        RemedyId: 16,
        RemedyName: 'Lemon Balm',
        Remediesimg: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.A486wwklwyQwIWDn8az7_AHaEq%26pid%3DApi&f=1&ipt=dea15e6d041d76f512f5940d7ab5d0d999abce1a0f8585dcb328f5f484883815&ipo=images',
        Description: 'Lemon balm is an herb that helps reduce stress, improve mood, and aid in better sleep.',
        Benefits: 'Fights infections and reduces inflammation.',
        PreperationMethod: 'Mix turmeric powder in warm milk.',
        UsageInstructions: 'Drink before bedtime.',
        CategoryId: 2,
        createdBy: 'admin',
        category: 'skin'
      },
      {
        RemedyId: 17,
        RemedyName: 'Ashwagandha',
        Remediesimg: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.NpGV_dYZ5X1DJgwHY58eqwHaEo%26pid%3DApi&f=1&ipt=4e19712bf6e8adf1dcd439eeacdc206e8a65ea291756569ed909b172e3cbe582&ipo=images',
        Description: 'Ashwagandha is a traditional herb used to reduce stress, improve focus, and boost energy levels.',
        Benefits: 'Fights infections and reduces inflammation.',
        PreperationMethod: 'Mix turmeric powder in warm milk.',
        UsageInstructions: 'Drink before bedtime.',
        CategoryId: 2,
        createdBy: 'admin',
        category: 'Immunity'
      },
      {
        RemedyId: 18,
        RemedyName: 'Black Pepper',
        Remediesimg: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.herzindagi.info%2Fimage%2F2022%2FSep%2Fblack-pepper-remedies-in-astrology.jpg&f=1&nofb=1&ipt=e934d4c260cd7cdbad2286bd02ca05c56eed67ccd8a5e29a703314f8d0307b84&ipo=images',
        Description: 'Black pepper is a common spice that boosts nutrient absorption and improves digestion.',
        Benefits: 'Fights infections and reduces inflammation.',
        PreperationMethod: 'Mix turmeric powder in warm milk.',
        UsageInstructions: 'Drink before bedtime.',
        CategoryId: 2,
        createdBy: 'admin',
        category: 'Hair'
      },
      {
        RemedyId: 19,
        RemedyName: 'Mint',
        Remediesimg: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.h5OP3YIL8VOgXnqBhwlIawHaE8%26pid%3DApi&f=1&ipt=c92997fcc3dfbbdbd7755f637ecdae2d9dbb4ab412d2cd317ebcb9edc638c31d&ipo=images',
        Description: 'Mint leaves are great for freshening breath, calming indigestion, and reducing nausea.',
        Benefits: 'Fights infections and reduces inflammation.',
        PreperationMethod: 'Mix turmeric powder in warm milk.',
        UsageInstructions: 'Drink before bedtime.',
        CategoryId: 2,
        createdBy: 'admin',
        category: 'Skin'
      },
      {
        RemedyId: 20,
        RemedyName: 'Neem',
        Remediesimg: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.f3KJcyDM-InygyTw_m4_EAHaE8%26pid%3DApi&f=1&ipt=c68c9c8809730271f361751daa492fd9fb247b000f1fa315c97d54a254fa0558&ipo=images',
        Description: 'Neem is widely used for its antibacterial properties, especially for skin conditions like acne and eczema.',
        Benefits: 'Fights infections and reduces inflammation.',
        PreperationMethod: 'Mix turmeric powder in warm milk.',
        UsageInstructions: 'Drink before bedtime.',
        CategoryId: 2,
        createdBy: 'admin',
        category: 'Immunity'
      }
    ];
    constructor(private bookmarkService: BookmarkService) {}
    // Save card to bookmarks
  bookmarkCard(card: { RemedyId:number,RemedyName:string,Remediesimg:string,Description:string,Benefits:string,PreperationMethod:string,UsageInstructions:string,CategoryId:number,createdBy:string,category:string }): void {
    this.bookmarkService.addBookmark(card);
    alert( ` ${card.RemedyName}: Bookmarked Successfully!`);
  }
  
}
