import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    "id": 1,
    "title": "bats",
    "imageUrl": "https://th-thumbnailer.cdn-si-edu.com/LboTDPWtTMS6WzSnE1BurV0sLRs=/fit-in/1072x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/baseball-bats-in-dugout-520.jpg",
    "route": 'shop/bats'
  },
  {
    "id": 2,
    "title": "gloves",
    "imageUrl": "http://images.thepostgame.com/assets/public/AP110316059465_blog_post3.jpg",
    "route": 'shop/gloves'
  },
  {
    "id": 3,
    "title": "cleats",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
    "route": 'shop/cleats'
  },
  {
    "id": 4,
    "title": "batting gloves",
    "imageUrl": "https://media.gettyimages.com/photos/the-marucci-batting-gloves-worn-by-jose-bautista-of-the-toronto-blue-picture-id678628800?k=20&m=678628800&s=612x612&w=0&h=omjqgpkaLTulMP2-dR5Lz5Qupqau8iB1kNUeQiSP_WY=",
    "route": 'shop/batting gloves'
  },
  {
    "id": 5,
    "title": "bags",
    "imageUrl": "https://media.gettyimages.com/photos/detailed-view-of-the-workout-bag-of-tim-tebow-of-the-new-york-mets-picture-id1208595406?k=20&m=1208595406&s=612x612&w=0&h=TWfN4u5We9jSWCWKeA3DN65aE-Wt_znGGlG6iXmq3nk=",
    "route": 'shop/bags'
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;