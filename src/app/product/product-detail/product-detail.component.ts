import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  img = '';
  data: any;
  orderby: any;

  product_detail = [
    {
      id: 1,
      imgdef:
        'https://image.cellphones.com.vn/220x/media/catalog/product/i/p/iphone_13-_pro-5_4.jpg',
      detail: [
        {
          id: '1',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/i/p/iphone_13-_pro-1_2.jpg',
        },
        {
          id: '2',
          src: 'https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-4_2.jpg',
        },
        {
          id: '3',
          src: 'https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-4_2.jpg',
        },
        {
          id: '4',
          src: 'https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-3_2.jpg',
        },
      ],
      title: 'iPhone 13 Pro Max 256GB I Chính hãng VN/A',
      old: '2.00.000d',
      doc: "dajshlah'flwhfwkl ",
    },
    {
      id: 2,
      imgdef:
        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/m/a/macbook-pro-2021-007_1.jpg',
      detail: [
        {
          id: '1',
          src: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/m/a/macbook-pro-2021-007_1.jpg',
        },
        {
          id: '2',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/m/a/macbook-pro-2021-02.jpg',
        },
        {
          id: '3',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/m/a/macbook-pro-2021-005_1.jpg',
        },
        {
          id: '4',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/m/a/macbook-pro-2021-006_1.jpg',
        },
      ],
      title: 'Macbook Pro 14 inch 2021 | Chính hãng Apple Việt Nam',
      old: '49.990.000 ₫',
      doc: 'Hiệu năng vượt trội - Cân mọi tác vụ từ công việc, đồ họa cho đến những tựa game nặngĐa nhiệm mượt mà - RAM 16 GB giải quyết khối lượng công việc “nặng đô” một cách nhanh chóng và ấn tượngSSD 512 GB - Tăng tốc toàn diện và khởi động trong tích tắtMàn hình 14.2 inch Liquid Retina XDR (3024 x 1964) chất lượng hiển thị vô cùng sắc nét ',
    },
    {
      id: 3,
      imgdef:
        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/m/imac_21_inch_2020_mac24h_xuo7-a6_1.png',
      detail: [
        {
          id: '1',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/i/m/imac-27-inch-2020-5k-4.jpg',
        },
        {
          id: '2',
          src: 'https://image.cellphones.com.vn/358x/media/catalog/product/i/m/imac-27-inch-2020-5k-3.jpg',
        },
        {
          id: '3',
          src: 'https://image.cellphones.com.vn/358x/media/catalog/product/i/m/imac3-1400x1060-f8178b22-544b-42ae-9044-67cc3ea90a2b-0a3b3d67-c6ce-4a8e-8ba0-1fb9513af899-111bbe06-fa9b-4a88-8171-be12af7c0e60-26d09ebb-40a9-47bc-9d77-d131b74d0a8c_-_copy_1.jpg',
        },
        {
          id: '4',
          src: 'https://image.cellphones.com.vn/358x/media/catalog/product/i/m/imac-27-inch-2020-5k-2.jpg',
        },
      ],
      title:
        'Apple iMac 27 5K 2020 i5 3.1 8GB 256GB Radeon 5300 Chính Hãng (MXWT2)',
      old: '33.990.000 ₫',
      doc: 'Hiệu năng vượt trội - Cân mọi tác vụ từ công việc, đồ họa cho đến những tựa game nặngĐa nhiệm mượt mà - RAM 16 GB giải quyết khối lượng công việc “nặng đô” một cách nhanh chóng và ấn tượngSSD 512 GB - Tăng tốc toàn diện và khởi động trong tích tắtMàn hình 14.2 inch Liquid Retina XDR (3024 x 1964) chất lượng hiển thị vô cùng sắc nét ',
    },
    {
      id: 4,
      imgdef:
        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/m/a/mac-studio-1646775245-8194-1646775416-removebg-preview.jpg',
      detail: [
        {
          id: '1',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/m/a/mac-studio-1646775245-8194-1646775416-removebg-preview.jpg',
        },
      ],
      title: 'Mac Studio 2022 M1 Max 10 CPU | Chính hãng Apple Việt Nam',
      old: '59.990.000 ₫',
      doc: 'Hiệu năng vượt trội - Cân mọi tác vụ từ công việc, đồ họa cho đến những tựa game nặngĐa nhiệm mượt mà - RAM 16 GB giải quyết khối lượng công việc “nặng đô” một cách nhanh chóng và ấn tượngSSD 512 GB - Tăng tốc toàn diện và khởi động trong tích tắtMàn hình 14.2 inch Liquid Retina XDR (3024 x 1964) chất lượng hiển thị vô cùng sắc nét ',
    },
    {
      id: 5,
      imgdef:
        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_studio_display_2022_co_chan_de_1.jpg',
      detail: [
        {
          id: '1',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/d/i/display_2.jpg',
        },
        {
          id: '2',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/s/i/size_weight_tilt_2__bhoo55j9hxqq_large.jpg',
        },
        {
          id: '3',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/s/t/studio_display_pure_front_hero_screen_.jpg',
        },
        {
          id: '4',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/d/i/display_2.jpg',
        },
      ],
      title: 'Apple Studio Display 27 5K Chân đế cố định 2022 chính hãng',
      old: '43.990.000 ₫',
      doc: 'Hiệu năng vượt trội - Cân mọi tác vụ từ công việc, đồ họa cho đến những tựa game nặngĐa nhiệm mượt mà - RAM 16 GB giải quyết khối lượng công việc “nặng đô” một cách nhanh chóng và ấn tượngSSD 512 GB - Tăng tốc toàn diện và khởi động trong tích tắtMàn hình 14.2 inch Liquid Retina XDR (3024 x 1964) chất lượng hiển thị vô cùng sắc nét ',
    },
    {
      id: 6,
      imgdef:
        'https://image.cellphones.com.vn/358x/media/catalog/product/a/p/apple_studio_display_2022_nano_2.jpg',
      detail: [
        {
          id: '1',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/s/i/size_weight_tilt_2__bhoo55j9hxqq_large_2_1.jpg',
        },
        {
          id: '2',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/0/0/0011_2.jpg',
        },
      ],
      title: 'Macbook Pro 14 inch 2021 | Chính hãng Apple Việt Nam',
      old: '62.990.000 ₫',
      doc: 'Hiệu năng vượt trội - Cân mọi tác vụ từ công việc, đồ họa cho đến những tựa game nặngĐa nhiệm mượt mà - RAM 16 GB giải quyết khối lượng công việc “nặng đô” một cách nhanh chóng và ấn tượngSSD 512 GB - Tăng tốc toàn diện và khởi động trong tích tắtMàn hình 14.2 inch Liquid Retina XDR (3024 x 1964) chất lượng hiển thị vô cùng sắc nét ',
    },
    {
      id: 7,
      imgdef:
        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_studio_display_2022_kong_chan_de.jpg',
      detail: [
        {
          id: '1',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/a/p/apple_studio_display_2022_kong_chan_de_2.jpg',
        },
        {
          id: '2',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/s/i/size_weight_vesa_2__c4k11t3jpqye_large_1.jpg',
        },
      ],
      title: 'Macbook Pro 14 inch 2021 | Chính hãng Apple Việt Nam',
      old: '51.990.000 ₫',
      doc: 'Hiệu năng vượt trội - Cân mọi tác vụ từ công việc, đồ họa cho đến những tựa game nặngĐa nhiệm mượt mà - RAM 16 GB giải quyết khối lượng công việc “nặng đô” một cách nhanh chóng và ấn tượngSSD 512 GB - Tăng tốc toàn diện và khởi động trong tích tắtMàn hình 14.2 inch Liquid Retina XDR (3024 x 1964) chất lượng hiển thị vô cùng sắc nét ',
    },
    {
      id: 8,
      imgdef:
        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_ipad_pro_11_2021_m1_wifi_128gb.png',
      detail: [
        {
          id: '1',
          src: 'https://image.cellphones.com.vn/358x/media/catalog/product/p/h/photo-3-16218735459051861985463.jpg',
        },
        {
          id: '2',
          src: 'https://image.cellphones.com.vn/358x/media/catalog/product/i/p/ipad-pro-m1-11-inch-wifi-128gb-2021-bac.jpg',
        },
        {
          id: '3',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/i/p/ipad-pro-11-2021-1_2.jpg',
        },
        {
          id: '4',
          src: 'https://image.cellphones.com.vn/358x/media/catalog/product/a/p/apple_ipad_pro_11_2021_m1_wifi_128gb.png',
        },
      ],
      title: 'Apple iPad Pro 11 2021 M1 WiFi 128GB I Chính hãng Apple Việt Nam',
      old: '19.950.000 ₫',
      doc: 'Hiệu năng vượt trội - Cân mọi tác vụ từ công việc, đồ họa cho đến những tựa game nặngĐa nhiệm mượt mà - RAM 16 GB giải quyết khối lượng công việc “nặng đô” một cách nhanh chóng và ấn tượngSSD 512 GB - Tăng tốc toàn diện và khởi động trong tích tắtMàn hình 14.2 inch Liquid Retina XDR (3024 x 1964) chất lượng hiển thị vô cùng sắc nét ',
    },
    {
      id: 9,
      imgdef:
        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/ipad_pro_11_2020_wifi_128gb.png',
      detail: [
        {
          id: '1',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/a/p/apple-ipad-pro-11-2020-wifi-128-gb-2.jpg',
        },
        {
          id: '2',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/i/p/ipad-pro-2020-11-inch-06071_3.jpg',
        },
        {
          id: '3',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/i/p/ipad-pro-2020-11-inch-06085_3.jpg',
        },
        {
          id: '4',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/i/p/ipad-pro-2020-11-inch-06057_3.jpg',
        },
      ],
      title: 'iPad Pro 11 2020 WiFi 128GB I Chính hãng Apple Việt Nam',
      old: '49.990.000 ₫',
      doc: 'Hiệu năng vượt trội - Cân mọi tác vụ từ công việc, đồ họa cho đến những tựa game nặngĐa nhiệm mượt mà - RAM 16 GB giải quyết khối lượng công việc “nặng đô” một cách nhanh chóng và ấn tượngSSD 512 GB - Tăng tốc toàn diện và khởi động trong tích tắtMàn hình 14.2 inch Liquid Retina XDR (3024 x 1964) chất lượng hiển thị vô cùng sắc nét ',
    },
    {
      id: 10,
      imgdef:
        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_13_pro_max_alpine_green_pure_back_iphone_13_pro_max_alpine_green_pure_front_2-up_screen__usen.png',
      detail: [
        {
          id: '1',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/i/p/iphone-13-pro-family-hero.png',
        },
        {
          id: '2',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/i/p/iphone_13_pro_max_iphone_13_pro_alpine_green_combo_screen__wwen.png',
        },
        {
          id: '3',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/i/p/iphone_13_pro_max_iphone_13_pro_alpine_green_combo_screen__wwen.png',
        },
        {
          id: '4',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/i/p/iphone_13_pro_max_alpine_green_pure_back_iphone_13_pro_max_alpine_green_pure_front_2-up_screen__usen.png',
        },
      ],
      title: 'iPhone 13 Pro Max 128GB - Xanh lá | Chính hãng VN/A',
      old: '30.700.000 ₫',
      doc: 'Hiệu năng vượt trội - Cân mọi tác vụ từ công việc, đồ họa cho đến những tựa game nặngĐa nhiệm mượt mà - RAM 16 GB giải quyết khối lượng công việc “nặng đô” một cách nhanh chóng và ấn tượngSSD 512 GB - Tăng tốc toàn diện và khởi động trong tích tắtMàn hình 14.2 inch Liquid Retina XDR (3024 x 1964) chất lượng hiển thị vô cùng sắc nét ',
    },
    {
      id: 11,
      imgdef:
        'https://image.cellphones.com.vn/358x/media/catalog/product/4/1/41166_laptop_asus_vivobook_pro_16x_oled_m7600qc_l2077w_1.jpg',
      detail: [
        {
          id: '1',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/4/1/41166_laptop_asus_vivobook_pro_16x_oled_m7600qc_l2077w_4.jpg',
        },
        {
          id: '2',
          src: 'https://image.cellphones.com.vn/358x/media/catalog/product/4/1/41166_laptop_asus_vivobook_pro_16x_oled_m7600qc_l2077w_5.jpg',
        },
        {
          id: '3',
          src: 'https://image.cellphones.com.vn/358x/media/catalog/product/l/a/laptop-asus_1.jpg',
        },
        {
          id: '4',
          src: 'https://image.cellphones.com.vn/358x/media/catalog/product/4/1/41166_laptop_asus_vivobook_pro_16x_oled_m7600qc_l2077w_6.jpg',
        },
      ],
      title: 'Laptop Asus VivoBook M7600QC-L2077W',
      old: '30.990.000 ₫',
      doc: 'Hiệu năng vượt trội - Cân mọi tác vụ từ công việc, đồ họa cho đến những tựa game nặngĐa nhiệm mượt mà - RAM 16 GB giải quyết khối lượng công việc “nặng đô” một cách nhanh chóng và ấn tượngSSD 512 GB - Tăng tốc toàn diện và khởi động trong tích tắtMàn hình 14.2 inch Liquid Retina XDR (3024 x 1964) chất lượng hiển thị vô cùng sắc nét ',
    },
    {
      id: 12,
      imgdef:
        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/2/_/2_64_22.jpg',
      detail: [
        {
          id: '1',
          src: 'https://image.cellphones.com.vn/358x/media/catalog/product/1/_/1_69_23.jpg',
        },
        {
          id: '2',
          src: 'https://image.cellphones.com.vn/358x/media/catalog/product/3/_/3_54_20.jpg',
        },
        {
          id: '3',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/5/_/5_33_17.jpg',
        },
        {
          id: '4',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/4/_/4_39_19.jpg',
        },
      ],
      title: 'Laptop Gaming Acer Nitro 5 AN515 45 R6EV',
      old: '20.190.000 ₫',
      doc: 'Hiệu năng vượt trội - Cân mọi tác vụ từ công việc, đồ họa cho đến những tựa game nặngĐa nhiệm mượt mà - RAM 16 GB giải quyết khối lượng công việc “nặng đô” một cách nhanh chóng và ấn tượngSSD 512 GB - Tăng tốc toàn diện và khởi động trong tích tắtMàn hình 14.2 inch Liquid Retina XDR (3024 x 1964) chất lượng hiển thị vô cùng sắc nét ',
    },
    {
      id: 13,
      imgdef:
        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/a/i/airpod-3.jpg',
      detail: [
        {
          id: '1',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/a/i/airpod-3.jpg',
        },
        {
          id: '2',
          src: 'https://image.cellphones.com.vn/358x/media/catalog/product/p/h/photo_2021-10-19_00-20-12.jpg',
        },
        {
          id: '3',
          src: 'https://image.cellphones.com.vn/358x/media/catalog/product/a/p/apple-airpods-3-1.jpg',
        },
        {
          id: '4',
          src: 'https://image.cellphones.com.vn/358x/media/catalog/product/a/p/apple-airpods-3-3.jpg',
        },
      ],
      title: 'Tai nghe Bluetooth Apple AirPods 3 | Chính hãng Apple Việt Nam',
      old: '4.490.000 ₫  ',
      doc: 'Hiệu năng vượt trội - Cân mọi tác vụ từ công việc, đồ họa cho đến những tựa game nặngĐa nhiệm mượt mà - RAM 16 GB giải quyết khối lượng công việc “nặng đô” một cách nhanh chóng và ấn tượngSSD 512 GB - Tăng tốc toàn diện và khởi động trong tích tắtMàn hình 14.2 inch Liquid Retina XDR (3024 x 1964) chất lượng hiển thị vô cùng sắc nét ',
    },
    {
      id: 13,
      imgdef:
        'https://image.cellphones.com.vn/358x/media/catalog/product/a/i/airpods-2_6.jpg',
      detail: [
        {
          id: '1',
          src: 'https://image.cellphones.com.vn/358x/media/catalog/product/a/z/azaudio-tai-nghe-bluetooth-apple-airpod-2_2.jpg',
        },
        {
          id: '2',
          src: 'https://image.cellphones.com.vn/358x/media/catalog/product/m/a/maxresdefault_1_2.jpg',
        },
        {
          id: '3',
          src: 'https://image.cellphones.com.vn/358x/media/catalog/product/i/m/image_2019-03-29_09-12-07_2.jpg',
        },
        {
          id: '4',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/a/p/apple-airpods-2-600x533_1_2.jpg',
        },
      ],
      title: 'Macbook Pro 14 inch 2021 | Chính hãng Apple Việt Nam',
      old: '2.790.000 ₫',
      doc: 'Hiệu năng vượt trội - Cân mọi tác vụ từ công việc, đồ họa cho đến những tựa game nặngĐa nhiệm mượt mà - RAM 16 GB giải quyết khối lượng công việc “nặng đô” một cách nhanh chóng và ấn tượngSSD 512 GB - Tăng tốc toàn diện và khởi động trong tích tắtMàn hình 14.2 inch Liquid Retina XDR (3024 x 1964) chất lượng hiển thị vô cùng sắc nét ',
    },
    {
      id: 14,
      imgdef:
        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/b/u/buds-live_1.jpg',
      detail: [
        {
          id: '1',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/b/u/buds-live_1.jpg',
        },
        {
          id: '2',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/b/u/buds_2_1_.png',
        },
        {
          id: '3',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/b/u/buds_1.png',
        },
        {
          id: '4',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/s/m/sm-r180_008_case-front_mystic_bronze.jpg',
        },
      ],
      title: 'Macbook Pro 14 inch 2021 | Chính hãng Apple Việt Nam',
      old: '1.490.000 ₫',
      doc: 'Hiệu năng vượt trội - Cân mọi tác vụ từ công việc, đồ họa cho đến những tựa game nặngĐa nhiệm mượt mà - RAM 16 GB giải quyết khối lượng công việc “nặng đô” một cách nhanh chóng và ấn tượngSSD 512 GB - Tăng tốc toàn diện và khởi động trong tích tắtMàn hình 14.2 inch Liquid Retina XDR (3024 x 1964) chất lượng hiển thị vô cùng sắc nét ',
    },
    {
      id: 15,
      imgdef:
        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/w/a/watch_3_leather.jpg',
      detail: [
        {
          id: '1',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/_/0/_0001_huawei-watch-gt-3-42mm-watch1_2x.jpg',
        },
        {
          id: '2',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/_/0/_0000_photo-1-1634911882731923987673.jpg',
        },
      ],
      title: 'Macbook Pro 14 inch 2021 | Chính hãng Apple Việt Nam',
      old: '5.990.000 ₫',
      doc: 'Hiệu năng vượt trội - Cân mọi tác vụ từ công việc, đồ họa cho đến những tựa game nặngĐa nhiệm mượt mà - RAM 16 GB giải quyết khối lượng công việc “nặng đô” một cách nhanh chóng và ấn tượngSSD 512 GB - Tăng tốc toàn diện và khởi động trong tích tắtMàn hình 14.2 inch Liquid Retina XDR (3024 x 1964) chất lượng hiển thị vô cùng sắc nét ',
    },
    {
      id: 16,
      imgdef:
        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/a/c/active-s1-blue-thumb.jpg',
      detail: [
        {
          id: '1',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/b/l/blue_8_1.jpg',
        },
        {
          id: '2',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/w/h/white_3_5.jpg',
        },
        {
          id: '3',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/y/e/yellow_2_1.jpg',
        },
        {
          id: '4',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/d/a/dark.jpg',
        },
      ],
      title: 'Đồng hồ thông minh Xiaomi Watch S1 Active',
      old: '4.490.000 ₫',
      doc: 'Hiệu năng vượt trội - Cân mọi tác vụ từ công việc, đồ họa cho đến những tựa game nặngĐa nhiệm mượt mà - RAM 16 GB giải quyết khối lượng công việc “nặng đô” một cách nhanh chóng và ấn tượngSSD 512 GB - Tăng tốc toàn diện và khởi động trong tích tắtMàn hình 14.2 inch Liquid Retina XDR (3024 x 1964) chất lượng hiển thị vô cùng sắc nét ',
    },
    {
      id: 17,
      imgdef:
        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/s/e/series_7-45-thumb_1.jpg',
      detail: [
        {
          id: '1',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/a/p/apple-watch-series-7-41mm_1.jpg',
        },
        {
          id: '2',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/a/p/apple-watch-series-7-41mm-2_1.jpg',
        },
        {
          id: '3',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/a/p/apple-watch-series-7-41mm-1_1.jpg',
        },
        {
          id: '4',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/4/0/4096-2731-max_1_2.jpg',
        },
      ],
      title:
        'Apple Watch Series 7 45mm (GPS) Viền nhôm dây cao su | Chính hãng VN/A',
      old: '10.590.000 ₫',
      doc: 'Hiệu năng vượt trội - Cân mọi tác vụ từ công việc, đồ họa cho đến những tựa game nặngĐa nhiệm mượt mà - RAM 16 GB giải quyết khối lượng công việc “nặng đô” một cách nhanh chóng và ấn tượngSSD 512 GB - Tăng tốc toàn diện và khởi động trong tích tắtMàn hình 14.2 inch Liquid Retina XDR (3024 x 1964) chất lượng hiển thị vô cùng sắc nét ',
    },
    {
      id: 18,
      imgdef:
        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/s/e/series_7-thumb_2.jpg',
      detail: [
        {
          id: '1',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/a/p/apple-watch-series-7-41mm-3.jpg',
        },
        {
          id: '2',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/a/p/apple-watch-series-7-41mm-6.jpg',
        },
        {
          id: '3',
          src: 'https://image.cellphones.com.vn/358x/media/catalog/product/a/p/apple-watch-series-7-41mm-5.jpg',
        },
        {
          id: '4',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/a/p/apple-watch-series-7-41mm-4.jpg',
        },
      ],
      title:
        'Apple Watch Series 7 41mm (GPS) Viền nhôm dây cao su | Chính hãng VN/A      ',
      old: '9.390.000 ₫',
      doc: 'Hiệu năng vượt trội - Cân mọi tác vụ từ công việc, đồ họa cho đến những tựa game nặngĐa nhiệm mượt mà - RAM 16 GB giải quyết khối lượng công việc “nặng đô” một cách nhanh chóng và ấn tượngSSD 512 GB - Tăng tốc toàn diện và khởi động trong tích tắtMàn hình 14.2 inch Liquid Retina XDR (3024 x 1964) chất lượng hiển thị vô cùng sắc nét ',
    },
    {
      id: 19,
      imgdef:
        'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/v/o/vong-deo-tay-thong-minh-xiaomi-mi-band-6-11_1.jpg',
      detail: [
        {
          id: '1',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/v/o/vong-deo-tay-thong-minh-xiaomi-mi-band-6-11_1.jpg',
        },
        {
          id: '2',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/v/o/vong-deo-tay-thong-minh-xiaomi-mi-band-6-13_1.jpg',
        },
        {
          id: '3',
          src: 'https://image.cellphones.com.vn/48x/media/catalog/product/v/o/vong-deo-tay-thong-minh-xiaomi-mi-band-6-2_2_1.jpg',
        },
        {
          id: '4',
          src: 'https://image.cellphones.com.vn/358x/media/catalog/product/v/o/vong-deo-tay-thong-minh-xiaomi-mi-band-6_2_1.jpg',
        },
      ],
      title: 'Vòng đeo tay thông minh Xiaomi Mi Band 7',
      old: '49.990.000 ₫',
      doc: 'Hiệu năng vượt trội - Cân mọi tác vụ từ công việc, đồ họa cho đến những tựa game nặngĐa nhiệm mượt mà - RAM 16 GB giải quyết khối lượng công việc “nặng đô” một cách nhanh chóng và ấn tượngSSD 512 GB - Tăng tốc toàn diện và khởi động trong tích tắtMàn hình 14.2 inch Liquid Retina XDR (3024 x 1964) chất lượng hiển thị vô cùng sắc nét ',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];

    this.getDataText(id);
  }
  getDataText(id: number) {
    const result = this.product_detail.filter((x) => x.id == id);
    this.data = result;
    return result;
  }
  tongleImg(id: number) {
    this.data[0].imgdef = id;
  }
}
