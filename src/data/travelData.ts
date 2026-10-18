/**
 * Ninh Binh Travel Guide Data & Pure Business Logic
 */

export interface Attraction {
  id: string;
  name: string;
  tag: string;
  tagColor: 'emerald' | 'amber' | 'teal' | 'indigo';
  image: string;
  description: string;
  shortSummary: string;
  ticketPrice: string;
  openHours: string;
  highlights: string[];
  tips: string;
  location: string;
}

export interface Dish {
  id: string;
  name: string;
  tag: string;
  intro: string;
  flavor: string;
  placeName: string;
  placeAddress: string;
  priceRange: string;
  image: string;
  phone: string;
}

export interface SeasonInfo {
  title: string;
  period: string;
  iconName: string;
  description: string;
  tips: string;
}

export interface TransportOption {
  type: string;
  title: string;
  duration: string;
  price: string;
  badge: string;
  features: string[];
  recommendation: string;
}

export interface RentalShop {
  id: string;
  name: string;
  address: string;
  hotline: string;
  rawPhone: string;
  pricing: {
    item: string;
    price: string;
  }[];
  services: string[];
  note: string;
}

export interface ItineraryStep {
  time: string;
  title: string;
  desc: string;
  iconType: 'boat' | 'food' | 'photo' | 'lantern' | 'hotel' | 'bus';
}

export interface ItineraryPlan {
  id: string;
  durationTag: string;
  title: string;
  subtitle: string;
  estimatedBudget: string;
  targetUser: string;
  days: {
    dayTitle: string;
    steps: ItineraryStep[];
  }[];
  includedTips: string[];
}

export const ATTRACTIONS_DATA: Attraction[] = [
  {
    id: 'trang-an',
    name: 'Quần thể danh thắng Tràng An',
    tag: 'Di sản Kép UNESCO',
    tagColor: 'emerald',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
    description: 'Di sản thế giới kép đầu tiên tại Việt Nam được UNESCO công nhận. Du khách ngồi trên chiếc thuyền nan mộc mạc lướt êm ả giữa lòng thung lũng nước xanh ngọc bích, len lỏi xuyên qua những hang động kỳ ảo dài hàng trăm mét và chiêm ngưỡng những vách núi đá vôi triệu năm hùng vĩ.',
    shortSummary: 'Chèo thuyền nan lướt nhẹ trên dòng sông Sào Khê xanh trong, len lỏi qua hệ thống thủy động huyền ảo và non nước trùng điệp.',
    ticketPrice: '250.000 VNĐ / người lớn (Tuyến 1, 2 hoặc 3); 120.000 VNĐ / trẻ em (1m - 1m3)',
    openHours: '07:00 - 17:00 (Mùa hè mở sớm từ 06:30)',
    highlights: [
      'Chèo thuyền nan xuyên thủy động kỳ ảo (Hang Tối, Hang Sáng, Hang Nấu Rượu, Hang Mây)',
      'Tham quan Hành cung Vũ Lâm và Đền Trần uy nghiêm giữa non nước',
      'Check-in phim trường Kong: Skull Island lừng danh thế giới',
      'Mặt nước phẳng lặng trong vắt thấy từng cụm rong rêu kỳ thú'
    ],
    tips: 'Nên chọn Tuyến số 2 hoặc Tuyến 3 để cân bằng giữa hang động và đền đài. Nhớ mang theo nón lá hoặc ô nhỏ che nắng gió mát lành.',
    location: 'Xã Ninh Xuân & Trường Yên, Huyện Hoa Lư, Tỉnh Ninh Bình'
  },
  {
    id: 'pho-co-hoa-lu',
    name: 'Phố cổ Hoa Lư',
    tag: 'Văn Hóa & Đêm Rực Rỡ',
    tagColor: 'amber',
    image: 'https://images.unsplash.com/photo-1478424255087-62cc74005486?auto=format&fit=crop&w=1200&q=80',
    description: 'Không gian văn hóa truyền thống phục dựng lại nét phồn hoa của Cố đô Đại Cồ Việt thời kỳ Đinh - Tiền Lê. Khi hoàng hôn buông xuống, cả góc trời bừng sáng với hàng ngàn ngọn đèn lồng lung linh, bóng Tháp Bạc in hình xuống mặt hồ Kỳ Lân tạo nên khung cảnh tráng lệ nao lòng.',
    shortSummary: 'Không gian văn hóa Cố đô ngập tràn sắc màu với phố ẩm thực bản địa náo nhiệt và trải nghiệm ngắm nghìn lồng đèn lung linh trên hồ Kỳ Lân.',
    ticketPrice: 'Miễn phí vé vào cổng dạo bộ; Vé đi thuyền ngắm hoa đăng hồ Kỳ Lân: 100.000 VNĐ / khách',
    openHours: '14:00 - 23:00 hàng ngày (Nhộn nhịp và đẹp nhất từ 18:30)',
    highlights: [
      'Tháp Bạc Kỳ Lân rực rỡ phản chiếu ánh sáng sắc sảo',
      'Khu phố làng nghề truyền thống: gốm Bồ Bát, thêu ren Ninh Hải, tranh bồ đề',
      'Thiên đường ẩm thực đêm với hàng chục món ăn vặt đặc sản Bắc Bộ',
      'Trải nghiệm mặc Việt phục cổ trang chụp ảnh sống ảo tuyệt đẹp'
    ],
    tips: 'Ghé đến vào khoảng 17h30 để đón khoảnh khắc hoàng hôn vừa lặn và toàn bộ phố cổ đồng loạt lên đèn lung linh.',
    location: 'Khuôn viên Công viên Kỳ Lân, Phường Tân Thành, TP. Ninh Bình'
  },
  {
    id: 'chua-bich-dong',
    name: 'Chùa Bích Động',
    tag: 'Nam Thiên Đệ Nhị Động',
    tagColor: 'teal',
    image: 'https://images.unsplash.com/photo-1444360150727-329ab2c260a0?auto=format&fit=crop&w=1200&q=80',
    description: 'Được chúa Trịnh Sâm ngợi ca tặng danh hiệu "Nam thiên đệ nhị động" (Động đẹp thứ nhì trời Nam sau động Hương Tích). Chùa được xây dựng theo kiểu tam cấp độc đáo (Chùa Hạ, Chùa Trung, Chùa Thượng) ẩn mình ôm chặt lấy vách núi đá vôi u tịch, cổ kính rêu phong.',
    shortSummary: 'Danh thắng "Nam thiên đệ nhị động" với cây cầu đá rêu phong bắc qua hồ sen ngát hương, dẫn vào ba tầng chùa cổ thanh tịnh giữa vách núi.',
    ticketPrice: 'Miễn phí vé tham quan (Gửi xe máy: 10.000 VNĐ)',
    openHours: '07:00 - 18:00 hàng ngày',
    highlights: [
      'Cổng tam quan chùa Bích Động và cầu đá bắc qua hồ sen nổi tiếng quốc tế',
      'Ba tầng chùa cổ kính hòa mình tuyệt đối vào lòng hang đá thiên nhiên',
      'Mùa sen tháng 5 - 7 nở hồng ngát hương khắp thung lũng đá',
      'Tầm nhìn khoáng đạt bao trọn thung lũng Tam Cốc từ Chùa Thượng'
    ],
    tips: 'Mặc trang phục nhã nhặn, kín đáo để thể hiện lòng tôn kính cửa Phật. Nên đến vào sáng sớm 7h - 8h để đón những vạt nắng đầu tiên xuyên qua kẽ lá.',
    location: 'Thôn Đam Khê, Xã Ninh Hải, Huyện Hoa Lư, Tỉnh Ninh Bình'
  }
];

export const CUISINE_DATA: Dish[] = [
  {
    id: 'thit-de-nui',
    name: 'Thịt Dê Núi Ninh Bình',
    tag: 'Đặc sản trứ danh số 1',
    intro: 'Dê núi Ninh Bình được chăn thả tự do trên những triền núi đá vôi hiểm trở, hàng ngày vận động liên tục và ăn nhiều loại thảo mộc, lá thuốc quý nên thớ thịt cực kỳ săn chắc, ngọt mềm, ít mỡ và thơm ngậy đặc trưng.',
    flavor: 'Được chế biến tài hoa thành hơn 20 món ăn độc đáo: Dê tái chanh bùi béo cuốn bánh tráng rau rừng, Dê nướng tảng thơm lừng cháy cạnh giữ trọn vị ngọt tự nhiên, Dê xào lăn đậm đà nước cốt dừa sả ớt chấm tương bần gừng cay ấm.',
    placeName: 'Nhà hàng Dê Núi Chính Thư',
    placeAddress: 'Thôn Khê Thượng, Xã Ninh Xuân (gần Tràng An), Huyện Hoa Lư, Ninh Bình',
    priceRange: '150.000đ - 280.000đ / người',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    phone: '0948 426 888'
  },
  {
    id: 'com-chay',
    name: 'Cơm Cháy Chà Bông Ninh Bình',
    tag: 'Món quà ẩm thực Cố đô',
    intro: 'Món quà đặc sản giòn rụm nức tiếng gần xa. Cơm được nấu từ gạo nếp cái hoa vàng dẻo thơm bằng nồi gang dày đáy, lấy lớp cháy vàng đáy nồi đem phơi nắng tự nhiên rồi mới chiên trong chảo dầu sôi sùng sục.',
    flavor: 'Từng hạt nếp nở bung giòn tan, màu vàng ươm óng ả. Miếng cơm cháy giòn rụm ăn kèm ruốc chà bông cay dịu và rưới nước sốt tim cật dê thơm sánh mịn béo ngậy tạo nên hương vị bùng nổ khó quên.',
    placeName: 'Cơm Cháy Thăng Long',
    placeAddress: 'Chi Phong, Xã Trường Yên, Huyện Hoa Lư, Ninh Bình',
    priceRange: '35.000đ - 65.000đ / gói đặc sản quà tặng',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    phone: '0983 234 567'
  },
  {
    id: 'oc-nui',
    name: 'Ốc Núi Tràng An (Ốc Đá Tam Điệp)',
    tag: 'Sản vật thiên nhiên quý hiếm',
    intro: 'Loài ốc đặc sản chỉ xuất hiện vào mùa mưa từ tháng 4 đến tháng 8. Ốc sinh sống trong các hốc đá vôi sâu thẳm, thức ăn chính là rong rêu xanh và các loài lá thuốc nam mọc hoang dại trên núi.',
    flavor: 'Thịt ốc dày mình, dai giòn sần sật và có vị ngọt bùi thanh mát, thoang thoảng mùi thảo dược thảo mộc. Món ốc núi hấp sả gừng giữ trọn vẹn vị tươi ngọt chấm mắm gừng ớt cay nồng hoặc xào me tỏi ớt bốc khói nghi ngút.',
    placeName: 'Nhà hàng Quốc Khánh',
    placeAddress: 'Khu du lịch Tràng An, Xã Trường Yên, Huyện Hoa Lư, Ninh Bình',
    priceRange: '90.000đ - 160.000đ / đĩa',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    phone: '0916 889 900'
  }
];

export const SEASONS_DATA: SeasonInfo[] = [
  {
    title: 'Mùa Lúa Chín Tam Cốc',
    period: 'Tháng 5 - Tháng 6',
    iconName: 'sun',
    description: 'Hai bên bờ dòng sông Ngô Đồng chuyển sang sắc vàng ươm rực rỡ của thảm lúa chín, hòa quyện với màu xanh ngắt của núi non tạo thành bức tranh sơn thủy hữu tình lay động lòng người.',
    tips: 'Thời điểm chụp ảnh đẹp nhất là lúc 8h - 10h sáng khi ánh nắng chan hòa chiếu rọi qua vách núi.'
  },
  {
    title: 'Mùa Xuân Trẩy Hội Cố Đô',
    period: 'Tháng 1 - Tháng 3',
    iconName: 'sparkles',
    description: 'Tiết trời se lạnh của mùa xuân miền Bắc, không khí thanh tịnh và lễ hội đầu năm sôi nổi tại Chùa Bái Đính, Quần thể Tràng An và Đền thờ Vua Đinh - Vua Lê.',
    tips: 'Nên kết hợp hành hương vãn cảnh đầu năm cầu bình an, may mắn cho gia đình.'
  },
  {
    title: 'Mùa Hoa Sen Nở Ngát Núi Rừng',
    period: 'Tháng 6 - Tháng 7',
    iconName: 'flower',
    description: 'Hàng trăm hồ sen quanh chân núi Bích Động, Tam Cốc và Hang Múa đồng loạt bung nở hồng rực rỡ, tỏa hương thơm ngát giữa không gian thung lũng đá vôi tĩnh lặng.',
    tips: 'Nên ghé hồ sen vào buổi sớm mai 6h - 8h để ngắm giọt sương đọng trên cánh sen thơm ngát.'
  },
  {
    title: 'Mùa Thu Nước Trong Biếc',
    period: 'Tháng 9 - Tháng 11',
    iconName: 'leaf',
    description: 'Trời thu xanh ngắt không một gợn mây, không khí mát dịu trong lành, nước sông Sào Khê trong vắt có thể nhìn thấu từng dải rong rêu đuôi chó xanh biếc dưới đáy.',
    tips: 'Thời tiết vô cùng dễ chịu, rất thích hợp để thuê xe máy rong ruổi khám phá các cung đường làng quê.'
  }
];

export const TRANSPORT_OPTIONS: TransportOption[] = [
  {
    type: 'limousine',
    title: 'Xe Limousine VIP Đưa Đón Tận Nơi',
    duration: '1 giờ 20 phút',
    price: '150.000 - 180.000 VNĐ / vé / lượt',
    badge: 'Tiện lợi & Nhanh nhất',
    features: [
      'Chạy thẳng cao tốc Hà Nội - Ninh Bình êm ái',
      'Đón trả tận nơi tại nội thành Hà Nội & khách sạn/homestay Ninh Bình',
      'Ghế bọc da massage cao cấp, wifi, cổng sạc, nước khoáng miễn phí'
    ],
    recommendation: 'Lựa chọn hàng đầu cho các cặp đôi, gia đình và nhóm bạn muốn di chuyển nhanh chóng, nghỉ ngơi thư giãn.'
  },
  {
    type: 'train',
    title: 'Tàu Hỏa Du Lịch (Ga Hà Nội ➔ Ga Ninh Bình)',
    duration: '2 giờ 15 phút',
    price: '90.000 - 140.000 VNĐ / vé',
    badge: 'Trải nghiệm ngắm cảnh hoài niệm',
    features: [
      'Khởi hành đúng giờ từ Ga Hà Nội (các chuyến tàu SE5, SE7, SE19...)',
      'Cung đường sắt thong thả ngắm đồng bằng Bắc Bộ bình yên qua ô cửa sổ',
      'Ga Ninh Bình nằm ngay trung tâm thành phố, tiện đón xe về homestay'
    ],
    recommendation: 'Phù hợp với du khách yêu thích trải nghiệm chill hoài cổ và du lịch chậm.'
  }
];

export const RENTAL_SHOPS: RentalShop[] = [
  {
    id: 'duc-thang',
    name: 'Cửa hàng Thuê xe máy Ninh Bình - Đức Thắng',
    address: 'Đường Tố Hữu, Phường Đông Thành, TP. Ninh Bình',
    hotline: '0912 345 678',
    rawPhone: '0912345678',
    pricing: [
      { item: 'Xe số (Wave Alpha, Sirius, Blade)', price: '100.000 VNĐ / ngày' },
      { item: 'Xe tay ga (Vision, AirBlade, Lead)', price: '150.000 VNĐ / ngày' }
    ],
    services: [
      'Miễn phí 02 mũ bảo hiểm đạt chuẩn an toàn',
      'Tặng áo mưa tiện lợi dự phòng',
      'Bản đồ du lịch Ninh Bình cầm tay chi tiết',
      'Hỗ trợ kỹ thuật và cứu hộ xe trên mọi cung đường 24/7'
    ],
    note: 'Thủ tục nhanh gọn chỉ cần CCCD hoặc GPLX. Xe luôn được bảo dưỡng, thay dầu định kỳ trước khi bàn giao.'
  },
  {
    id: 'trang-an-eco',
    name: 'Cửa hàng Thuê xe máy & Ô tô tự lái Tràng An Eco',
    address: 'Khu du lịch Tràng An, Huyện Hoa Lư, Tỉnh Ninh Bình',
    hotline: '0988 765 432',
    rawPhone: '0988765432',
    pricing: [
      { item: 'Xe máy số & tay ga đời mới', price: '100.000 - 150.000 VNĐ / ngày' },
      { item: 'Xe máy điện VinFast thân thiện môi trường', price: '130.000 VNĐ / ngày' },
      { item: 'Ô tô tự lái 4 chỗ - 7 chỗ', price: '600.000 - 900.000 VNĐ / ngày' }
    ],
    services: [
      'Giao nhận xe tận nơi MIỄN PHÍ tại Ga tàu, Khách sạn, Homestay trong bán kính 10km',
      'Đầy đủ giấy tờ xe, bảo hiểm và xăng xe ban đầu',
      'Hỗ trợ tư vấn lịch trình và chỉ đường miễn phí',
      'Có dịch vụ xe điện du lịch xanh tham quan quanh quần thể Tràng An'
    ],
    note: 'Vị trí đắc địa ngay cửa ngõ Tràng An, cực kỳ thuận tiện cho du khách muốn nhận xe ngay khi tới danh thắng.'
  }
];

export const ITINERARY_PLANS: ItineraryPlan[] = [
  {
    id: 'plan-1-day',
    durationTag: '1 Ngày (Trong ngày)',
    title: 'Khám Phá Non Nước Tràng An & Đêm Cổ Đô Hoa Lư',
    subtitle: 'Lộ trình tối ưu cho chuyến đi cuối tuần xuất phát từ Hà Nội, vừa ngắm trọn danh thắng vừa thưởng thức đặc sản và cảnh đêm lung linh.',
    estimatedBudget: '~650.000 - 850.000 VNĐ / người',
    targetUser: 'Du khách đi về trong ngày từ Hà Nội / Miền Bắc',
    days: [
      {
        dayTitle: 'Hành trình 1 ngày tinh hoa',
        steps: [
          {
            time: '07:00 - 08:30',
            title: 'Di chuyển từ Hà Nội đến Ninh Bình',
            desc: 'Đón xe Limousine cao cấp tại Hà Nội, di chuyển theo cao tốc Pháp Vân - Cầu Giẽ. Xe trả tận bến thuyền Tràng An.',
            iconType: 'bus'
          },
          {
            time: '08:45 - 12:00',
            title: 'Chèo thuyền khám phá Quần thể danh thắng Tràng An',
            desc: 'Mua vé Tuyến số 2 hoặc 3 (250.000đ), chèo thuyền nan xuyên qua các thủy động kỳ vĩ, viếng đền Suối Tiên và check-in phim trường Kong.',
            iconType: 'boat'
          },
          {
            time: '12:15 - 13:45',
            title: 'Thưởng thức ẩm thực Dê núi & Cơm cháy tại Nhà hàng Chính Thư',
            desc: 'Nghỉ ngơi dùng bữa trưa với món dê tái chanh thơm bùi, dê nướng cháy cạnh thơm lừng và cơm cháy chà bông giòn rụm.',
            iconType: 'food'
          },
          {
            time: '14:00 - 16:30',
            title: 'Chinh phục 486 bậc đá Hang Múa ngắm toàn cảnh thung lũng Tam Cốc',
            desc: 'Thử thách leo lên đỉnh Ngọa Long ngắm bức tranh thiên nhiên tuyệt mỹ với dòng sông Ngô Đồng uốn lượn và núi đá vôi kỳ vĩ.',
            iconType: 'photo'
          },
          {
            time: '17:00 - 19:30',
            title: 'Khám phá Phố cổ Hoa Lư rực rỡ sắc màu về đêm',
            desc: 'Dạo bộ ngắm Tháp Bạc Kỳ Lân, chiêm ngưỡng hàng ngàn ngọn đèn lồng rực sáng bên hồ, thưởng thức ốc núi và món ngon vặt Cố đô.',
            iconType: 'lantern'
          },
          {
            time: '20:00 - 21:30',
            title: 'Lên xe Limousine trở về lại Hà Nội',
            desc: 'Xe đón tại Phố cổ Hoa Lư, nghỉ ngơi trên ghế massage êm ái trở về thủ đô kết thúc chuyến hành trình trọn vẹn.',
            iconType: 'bus'
          }
        ]
      }
    ],
    includedTips: [
      'Mang theo nón lá hoặc mũ rộng vành khi chèo thuyền Tràng An',
      'Chuẩn bị giày thể thao êm chân để leo bậc đá Hang Múa',
      'Đem sạc dự phòng vì cảnh đẹp chụp ảnh liên tục'
    ]
  },
  {
    id: 'plan-2-days',
    durationTag: '2 Ngày 1 Đêm',
    title: 'Tuyệt Tác Ninh Bình: Tràng An - Bích Động - Phố Cổ & Ẩm Thực',
    subtitle: 'Hành trình thong thả đắm mình vào cảnh sắc non xanh nước biếc, vẻ u tịch của chùa cổ và trọn vẹn phong vị ẩm thực bản địa.',
    estimatedBudget: '~1.400.000 - 1.950.000 VNĐ / người (đã gồm homestay & thuê xe máy)',
    targetUser: 'Cặp đôi, gia đình, nhóm bạn thích du lịch nghỉ dưỡng & trải nghiệm',
    days: [
      {
        dayTitle: 'Ngày 1: Thủy Động Tràng An - Cố Đô Ngàn Năm - Đêm Phố Cổ Kỳ Lân',
        steps: [
          {
            time: '08:00 - 09:30',
            title: 'Đến Ninh Bình, nhận xe máy Đức Thắng & gửi hành lý',
            desc: 'Nhận xe máy tay ga/xe số đã được giao tận nơi, nạp đầy năng lượng bắt đầu hành trình vi vu cung đường lúa.',
            iconType: 'bus'
          },
          {
            time: '09:45 - 12:30',
            title: 'Khám phá Quần thể danh thắng Tràng An di sản thế giới',
            desc: 'Trải nghiệm chèo thuyền nan 3 tiếng luồn qua các hang động kỳ thú và chiêm ngưỡng kiến trúc đền cổ giữa non nước.',
            iconType: 'boat'
          },
          {
            time: '12:45 - 14:00',
            title: 'Bữa trưa đặc sản Cố đô tại Nhà hàng Chính Thư',
            desc: 'Thưởng thức mẹt dê núi đủ món thơm phức, nạp năng lượng sau buổi sáng chèo thuyền.',
            iconType: 'food'
          },
          {
            time: '14:30 - 16:30',
            title: 'Check-in nhận phòng Homestay view núi & Thăm Cố đô Hoa Lư',
            desc: 'Dâng hương tưởng niệm vua Đinh Tiên Hoàng và vua Lê Đại Hành, ngắm dấu tích kinh thành xưa thế kỷ X.',
            iconType: 'hotel'
          },
          {
            time: '17:30 - 21:30',
            title: 'Phố cổ Hoa Lư lên đèn, chèo thuyền hồ Kỳ Lân & Ăn ốc núi',
            desc: 'Hòa mình vào bữa tiệc ánh sáng của hàng ngàn chiếc đèn lồng, ghé nhà hàng Quốc Khánh thưởng thức món ốc núi hấp sả.',
            iconType: 'lantern'
          }
        ]
      },
      {
        dayTitle: 'Ngày 2: Chùa Bích Động Cổ Tự - Tam Cốc Thơ Mộng - Mua Quà Đặc Sản',
        steps: [
          {
            time: '06:30 - 08:30',
            title: 'Đón bình minh tại Chùa Bích Động "Nam thiên đệ nhị động"',
            desc: 'Chụp ảnh cổng chùa rêu phong và cầu đá hồ sen lúc sớm mai vắng vẻ, leo Chùa Thượng ngắm thung lũng đá vôi bảng lảng sương.',
            iconType: 'photo'
          },
          {
            time: '09:00 - 11:30',
            title: 'Ngồi thuyền nan ngắm thung lũng Tam Cốc',
            desc: 'Lướt thuyền nan xuôi dòng sông Ngô Đồng qua Hang Cả, Hang Hai, Hang Ba và ngắm nhìn đời sống dân dã của người bản địa.',
            iconType: 'boat'
          },
          {
            time: '12:00 - 13:30',
            title: 'Bữa trưa nhẹ nhàng & Mua quà Cơm cháy Thăng Long',
            desc: 'Ghé xưởng Cơm Cháy Thăng Long mua đặc sản cơm cháy chà bông đóng gói giòn rụm làm quà biếu người thân, bạn bè.',
            iconType: 'food'
          },
          {
            time: '14:00 - 16:00',
            title: 'Thảnh thơi ngắm cảnh, trả xe máy và lên xe trở về',
            desc: 'Trả xe máy tại cửa hàng hoặc điểm hẹn khách sạn, lên xe Limousine trở về với muôn vàn bức ảnh kỷ niệm tuyệt đẹp.',
            iconType: 'bus'
          }
        ]
      }
    ],
    includedTips: [
      'Nên chọn homestay khu vực Tam Cốc hoặc Tràng An có view nhìn ra núi đá vôi để tận hưởng trọn vẹn không khí yên bình',
      'Đến Chùa Bích Động trước 8h sáng để có những bức ảnh cổng chùa cổ kính đẹp nhất không bị vướng người',
      'Đặt trước vé Limousine chiều về trước 1 ngày để đảm bảo có chỗ ưng ý'
    ]
  }
];

/**
 * Pure helper function to estimate trip cost dynamically
 */
export function calculateTripCost(params: {
  planType: '1-day' | '2-days';
  peopleCount: number;
  vehicleType: 'xe_so' | 'xe_ga' | 'limousine';
  hotelStyle: 'budget' | 'homestay_view' | 'none';
}) {
  const { planType, peopleCount, vehicleType, hotelStyle } = params;
  const count = Math.max(1, peopleCount);

  // Sightseeing tickets: Trang An (250k) + Hang Mua (100k) / Tam Coc (120k)
  const ticketPerPerson = planType === '1-day' ? 350000 : 470000;
  const totalTickets = ticketPerPerson * count;

  // Transport cost
  let transportPerUnit = 0;
  let vehicleCount = 1;
  if (vehicleType === 'xe_so') {
    transportPerUnit = planType === '1-day' ? 100000 : 200000;
    vehicleCount = Math.ceil(count / 2); // 2 people per motorbike
  } else if (vehicleType === 'xe_ga') {
    transportPerUnit = planType === '1-day' ? 150000 : 300000;
    vehicleCount = Math.ceil(count / 2);
  } else {
    // Limousine round trip ~ 320k / person
    transportPerUnit = 320000;
    vehicleCount = count;
  }
  const totalTransport = transportPerUnit * vehicleCount;

  // Food budget: Goat meat + Com chay + Local meals
  const foodPerPerson = planType === '1-day' ? 250000 : 550000;
  const totalFood = foodPerPerson * count;

  // Accommodation
  let roomCost = 0;
  if (planType === '2-days' && hotelStyle !== 'none') {
    const roomRate = hotelStyle === 'homestay_view' ? 650000 : 400000;
    const roomCount = Math.ceil(count / 2);
    roomCost = roomRate * roomCount;
  }

  const grandTotal = totalTickets + totalTransport + totalFood + roomCost;
  const perPerson = Math.round(grandTotal / count);

  return {
    grandTotal,
    perPerson,
    breakdown: {
      tickets: totalTickets,
      transport: totalTransport,
      food: totalFood,
      accommodation: roomCost
    }
  };
}

export function formatVND(amount: number): string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    maximumFractionDigits: 0
  }).format(amount);
}
