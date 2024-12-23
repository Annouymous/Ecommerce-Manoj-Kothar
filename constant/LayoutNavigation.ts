export const LayoutNavigation = [
  {
    id: 1,
    name: "Main Home",
    NavigationProperties: [
      {
        id: 1,
        name: "Dashboard",
        href: "/dashboard",
        isSingle: true,
        icon: "AiOutlineAppstore",
        sub: [],
      },
    ],
  },
  {
    id: 2,
    name: "All Pages",
    NavigationProperties: [
      {
        id: 1,
        name: "Ecommerce",
        href: "/products",
        isSingle: false,
        icon: "FiShoppingCart",
        sub: [
          {
            id: 1,
            name: "Products",
            href: "/dashboard/products/product-list",
            isSingle: true,
            icon: "CgShapeHexagon",
          },
          {
            id: 2,
            name: "Add products",
            href: "/dashboard/products/add-product",
            isSingle: true,
            icon: "CgShapeHexagon",
          },
        ],
      },
      {
        id: 2,
        name: "Category",
        href: "/category",
        isSingle: false,
        icon: "LuLayers",
        sub: [
          {
            id: 1,
            name: "Category list",
            href: "/products",
            isSingle: true,
            icon: "CgShapeHexagon",
          },
          {
            id: 2,
            name: "Add Category",
            href: "/add-products",
            isSingle: true,
            icon: "CgShapeHexagon",
          },
        ],
      },
      {
        id: 3,
        name: "Attributes",
        href: "/attributes",
        isSingle: false,
        icon: "FiBox",
        sub: [
          {
            id: 1,
            name: "Attributes",
            href: "/products",
            isSingle: true,
            icon: "CgShapeHexagon",
          },
          {
            id: 2,
            name: "Add Attributes",
            href: "/add-products",
            isSingle: true,
            icon: "CgShapeHexagon",
          },
        ],
      },
      {
        id: 8,
        name: "In Cart",
        href: "/dashboard/orders/in-cart",
        isSingle: true,
        icon: "IoBagCheckOutline",
        sub: [],
      },
      {
        id: 4,
        name: "Orders",
        href: "/orders",
        isSingle: false,
        icon: "MdOutlineRequestPage",
        sub: [
          {
            id: 1,
            name: "Order List",
            href: "/Order-List",
            isSingle: true,
            icon: "CgShapeHexagon",
          },
          {
            id: 3,
            name: "Payment History",
            href: "/payment-history",
            isSingle: true,
            icon: "CgShapeHexagon",
          },
          {
            id: 4,
            name: "Return / Exchange Requests",
            href: "/return-requests",
            isSingle: true,
            icon: "CgShapeHexagon",
          },
          {
            id: 5,
            name: "Shipping List",
            href: "/shipping-list",
            isSingle: true,
            icon: "CgShapeHexagon",
          },
          {
            id: 6,
            name: "Cancelled",
            href: "/cancelled",
            isSingle: true,
            icon: "CgShapeHexagon",
          },
        ],
      },
      {
        id: 5,
        name: "Users",
        href: "/users",
        isSingle: false,
        icon: "FiUser",
        sub: [
          {
            id: 1,
            name: "Users list",
            href: "/dashboard/users/users-list",
            isSingle: true,
            icon: "CgShapeHexagon",
          },
          {
            id: 2,
            name: "New User",
            href: "/dashboard/users/new-user",
            isSingle: true,
            icon: "CgShapeHexagon",
          },
        ],
      },
      {
        id: 6,
        name: "Gallery",
        href: "/gallery",
        isSingle: true,
        icon: "MdOutlinePhotoCameraBack",
        sub: [],
      },
      {
        id: 7,
        name: "Report",
        href: "/report",
        isSingle: true,
        icon: "MdAutoGraph",
        sub: [],
      },
    ],
  },
  {
    id: 3,
    name: "Documents",
    NavigationProperties: [
      {
        id: 1,
        name: "Docs",
        href: "/docs",
        isSingle: false,
        icon: "IoDocumentTextOutline",
        sub: [
          {
            id: 1,
            name: "Privacy Policy",
            href: "/dashboard/docs/Privacy-Policy",
            isSingle: true,
            icon: "CgShapeHexagon",
          },
          {
            id: 2,
            name: "Terms & Conditions",
            href: "/dashboard/docs/terms-conditions",
            isSingle: true,
            icon: "CgShapeHexagon",
          },
          {
            id: 3,
            name: "Refund Policy",
            href: "/dashboard/docs/refund-policy",
            isSingle: true,
            icon: "CgShapeHexagon",
          },
          {
            id: 4,
            name: "Shipping Policy",
            href: "/dashboard/docs/shipping-policy",
            isSingle: true,
            icon: "CgShapeHexagon",
          },
          {
            id: 5,
            name: "Cancellation Policy",
            href: "/dashboard/docs/cancellation-policy",
            isSingle: true,
            icon: "CgShapeHexagon",
          },
          {
            id: 6,
            name: "Return Policy",
            href: "/dashboard/docs/return-policy",
            isSingle: true,
            icon: "CgShapeHexagon",
          },
          {
            id: 7,
            name: "About us",
            href: "/dashboard/docs/about-us",
            isSingle: true,
            icon: "CgShapeHexagon",
          },
        ],
      },
      {
        id: 2,
        name: "F.A.Q",
        href: "/dashboard/faq",
        isSingle: true,
        icon: "FaQuestion",
        sub: [],
      },
    ],
  },
  {
    id: 1,
    name: "Settings",
    NavigationProperties: [
      {
        id: 1,
        name: "General",
        href: "/dashboard/general",
        isSingle: true,
        icon: "CgWebsite",
        sub: [],
      },
      {
        id: 1,
        name: "Settings",
        href: "/dashboard/settings",
        isSingle: true,
        icon: "IoSettingsOutline",
        sub: [],
      },
    ],
  },
];
