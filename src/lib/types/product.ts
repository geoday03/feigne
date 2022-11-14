export interface Product {
  id: string;
  category: string;
  title: string;
  price: string;
  image: string;
  description: string;
  reviews: {
    customerProfileNames: string[];
    customerProfilePictures: string[];
    customerRatings: string[];
    customerReviewTitles: string[];
    customerReviewBodies: string[];
  };
}
