import banner1 from '../../assets/images/demos/demo-6/banners/women14.jpg'
import banner2 from '../../assets/images/demos/demo-6/banners/men12.jpg'


const INITIAL_STATE ={
    sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 5,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 4,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: banner1,
          size: 'large',
          id: 2,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: banner2,
          size: 'large',
          id: 1,
          linkUrl: 'shop/mens'
        }
      ]

}

const directoryReducer = (state=INITIAL_STATE, action)=>{
    switch (action.type){
        default:
            return state;
    }
}

export default directoryReducer;