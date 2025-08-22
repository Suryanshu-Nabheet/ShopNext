import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, ShoppingCart, Plus, Minus, Truck, Shield, RotateCcw } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  badge?: string;
  brand?: string;
}

interface ProductDetailsPageProps {
  product: Product;
  onBack: () => void;
  onBuyNow: (product: Product, quantity: number) => void;
  onCartClick: () => void;
}

const ProductDetailsPage: React.FC<ProductDetailsPageProps> = ({ product, onBack, onBuyNow, onCartClick }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { dispatch } = useCart();
  const { state } = useCart();

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: 'ADD_ITEM', payload: product });
    }
  };

  const handleBuyNow = () => {
    onBuyNow(product, quantity);
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  // Mock additional images
  const getProductImages = (productId: number) => {
    const imageMap: { [key: number]: string[] } = {
      // Electronics
      1: [
        "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3394652/pexels-photo-3394652.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3394653/pexels-photo-3394653.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      2: [
        "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1034063/pexels-photo-1034063.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1034064/pexels-photo-1034064.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      3: [
        "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3780682/pexels-photo-3780682.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3780683/pexels-photo-3780683.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3780684/pexels-photo-3780684.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      4: [
        "https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4219655/pexels-photo-4219655.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4219656/pexels-photo-4219656.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4219657/pexels-photo-4219657.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      5: [
        "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2115258/pexels-photo-2115258.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2115259/pexels-photo-2115259.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      6: [
        "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2115258/pexels-photo-2115258.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2115259/pexels-photo-2115259.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      7: [
        "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1649772/pexels-photo-1649772.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1649773/pexels-photo-1649773.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1649774/pexels-photo-1649774.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      8: [
        "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/163101/circuit-circuit-board-resistor-computer-163101.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/163102/circuit-circuit-board-resistor-computer-163102.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/163103/circuit-circuit-board-resistor-computer-163103.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      9: [
        "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/404281/pexels-photo-404281.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/404282/pexels-photo-404282.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/404283/pexels-photo-404283.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      10: [
        "https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4219655/pexels-photo-4219655.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4219656/pexels-photo-4219656.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4219657/pexels-photo-4219657.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      11: [
        "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/777002/pexels-photo-777002.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/777003/pexels-photo-777003.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/777004/pexels-photo-777004.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      12: [
        "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/163101/circuit-circuit-board-resistor-computer-163101.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/163102/circuit-circuit-board-resistor-computer-163102.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/163103/circuit-circuit-board-resistor-computer-163103.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      // Fashion
      13: [
        "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/428341/pexels-photo-428341.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/428342/pexels-photo-428342.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/428343/pexels-photo-428343.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      14: [
        "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2905239/pexels-photo-2905239.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2905240/pexels-photo-2905240.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2905241/pexels-photo-2905241.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      15: [
        "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1040946/pexels-photo-1040946.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1040947/pexels-photo-1040947.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1040948/pexels-photo-1040948.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      16: [
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2529149/pexels-photo-2529149.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2529150/pexels-photo-2529150.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2529151/pexels-photo-2529151.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      17: [
        "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/7679721/pexels-photo-7679721.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/7679722/pexels-photo-7679722.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/7679723/pexels-photo-7679723.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      18: [
        "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1598506/pexels-photo-1598506.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      19: [
        "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1536620/pexels-photo-1536620.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1536621/pexels-photo-1536621.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1536622/pexels-photo-1536622.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      20: [
        "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1124466/pexels-photo-1124466.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1124467/pexels-photo-1124467.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      21: [
        "https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/769734/pexels-photo-769734.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/769735/pexels-photo-769735.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/769736/pexels-photo-769736.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      22: [
        "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/701878/pexels-photo-701878.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/701879/pexels-photo-701879.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/701880/pexels-photo-701880.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      // Home
      23: [
        "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1112599/pexels-photo-1112599.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1112600/pexels-photo-1112600.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1112601/pexels-photo-1112601.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      24: [
        "https://images.pexels.com/photos/4226883/pexels-photo-4226883.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4226884/pexels-photo-4226884.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4226885/pexels-photo-4226885.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4226886/pexels-photo-4226886.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      25: [
        "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/6489664/pexels-photo-6489664.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/6489665/pexels-photo-6489665.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/6489666/pexels-photo-6489666.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      26: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      27: [
        "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1090639/pexels-photo-1090639.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1090640/pexels-photo-1090640.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1090641/pexels-photo-1090641.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      28: [
        "https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4207893/pexels-photo-4207893.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4207894/pexels-photo-4207894.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4207895/pexels-photo-4207895.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      29: [
        "https://images.pexels.com/photos/6207516/pexels-photo-6207516.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/6207517/pexels-photo-6207517.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/6207518/pexels-photo-6207518.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/6207519/pexels-photo-6207519.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      30: [
        "https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2291368/pexels-photo-2291368.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2291369/pexels-photo-2291369.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2291370/pexels-photo-2291370.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      31: [
        "https://images.pexels.com/photos/4198021/pexels-photo-4198021.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4198022/pexels-photo-4198022.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4198023/pexels-photo-4198023.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4198024/pexels-photo-4198024.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      32: [
        "https://images.pexels.com/photos/8031918/pexels-photo-8031918.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/8031919/pexels-photo-8031919.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/8031920/pexels-photo-8031920.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/8031921/pexels-photo-8031921.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      // Sports
      33: [
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2529149/pexels-photo-2529149.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2529150/pexels-photo-2529150.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2529151/pexels-photo-2529151.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      34: [
        "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4056724/pexels-photo-4056724.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4056725/pexels-photo-4056725.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4056726/pexels-photo-4056726.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      35: [
        "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4162450/pexels-photo-4162450.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4162452/pexels-photo-4162452.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      36: [
        "https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1000085/pexels-photo-1000085.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1000086/pexels-photo-1000086.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1000087/pexels-photo-1000087.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      37: [
        "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4164762/pexels-photo-4164762.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4164763/pexels-photo-4164763.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4164764/pexels-photo-4164764.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      38: [
        "https://images.pexels.com/photos/4162438/pexels-photo-4162438.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4162439/pexels-photo-4162439.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4162440/pexels-photo-4162440.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4162441/pexels-photo-4162441.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      39: [
        "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1752758/pexels-photo-1752758.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1752759/pexels-photo-1752759.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1752760/pexels-photo-1752760.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      40: [
        "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/209978/pexels-photo-209978.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/209979/pexels-photo-209979.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/209980/pexels-photo-209980.jpeg?auto=compress&cs=tinysrgb&w=600"
      ]
    };
    
    return imageMap[productId] || [product.image, product.image, product.image, product.image];
  };

  const productImages = getProductImages(product.id);

  const features = [
    'Premium quality materials',
    'Durable construction',
    'Modern design',
    'Easy to use',
    'Excellent value for money'
  ];

  const specifications = [
    { label: 'Brand', value: product.brand || 'Premium Brand' },
    { label: 'Category', value: product.category },
    { label: 'Model', value: `${product.name.split(' ')[0]}-${product.id}` },
    { label: 'Warranty', value: '1 Year' },
    { label: 'Weight', value: '1.2 kg' },
    { label: 'Dimensions', value: '25 x 15 x 10 cm' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/60 to-blue-100/40 relative">
      {/* Shopping Cart Button - Fixed in top right corner */}
      <div className="fixed top-6 right-6 z-50">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-blue-600/30 rounded-xl opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-125 transition-all duration-500 blur-md"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-110 transition-all duration-300 blur-sm"></div>
          <button 
            onClick={onCartClick}
            className="relative z-10 p-3 bg-white/95 backdrop-blur-sm text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-xl transform hover:scale-105 hover:shadow-xl hover:shadow-blue-200/50 border border-gray-200/50 hover:border-blue-200/30"
          >
            <ShoppingCart className="h-6 w-6" />
            {state.items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-lg animate-pulse">
                {state.items.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <motion.button
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors mt-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to All Products
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Image */}
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-xl"
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.badge && (
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {product.badge}
                  </span>
                )}
                {discount > 0 && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    -{discount}% OFF
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-md transition-all duration-200 ${
                    selectedImage === index ? 'ring-2 ring-blue-500' : 'hover:shadow-lg'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-20 object-cover rounded"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Product Info */}
            <div>
              <span className="text-sm text-blue-600 font-medium">{product.category}</span>
              <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-2xl text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
                {discount > 0 && (
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Save ${(product.originalPrice! - product.price).toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Quantity</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 rounded-l-lg transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 rounded-r-lg transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <span className="text-gray-600">
                  Total: ${(product.price * quantity).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <motion.button
                onClick={handleBuyNow}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-colors duration-200 shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Buy Now
              </motion.button>
              
              <motion.button
                onClick={handleAddToCart}
                className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 py-4 px-6 rounded-xl font-semibold text-lg transition-colors duration-200 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </motion.button>
              
            </div>

            {/* Shipping Info */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <Truck className="h-6 w-6 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Free Shipping</div>
                    <div className="text-sm text-gray-600">On orders over $50</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <RotateCcw className="h-6 w-6 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Easy Returns</div>
                    <div className="text-sm text-gray-600">30-day return policy</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Secure Payment</div>
                    <div className="text-sm text-gray-600">SSL encrypted</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Description & Features */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Description</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  This premium {product.name.toLowerCase()} offers exceptional quality and value. 
                  Crafted with attention to detail and designed to meet your highest expectations. 
                  Perfect for everyday use and special occasions, this product combines functionality 
                  with style to deliver an outstanding user experience.
                </p>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h3>
                <div className="space-y-4">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-700">{spec.label}</span>
                      <span className="text-gray-600">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;