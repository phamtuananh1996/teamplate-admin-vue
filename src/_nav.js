export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      name: 'Quản lý người dùng',
      url: '/user',
      icon: 'fa fa-user',
      children: [
        {
          name: 'Danh sách',
          url: '/user/list',
          icon: 'icon-list'
        }
      ]
    },
    {
      title: true,
      name: 'Media'
    },
    {
      name: 'Quản lý Media',
      url: '/media',
      icon: 'fa fa-file-video-o',
      children: [
        {
          name: 'Everything',
          url: '/media/all',
          icon: 'icon-list'
        },
        {
          name: 'Image',
          url: '/media/image',
          icon: 'fa fa-image'
        },
        {
          name: 'Document',
          url: '/media/document',
          icon: 'fa fa-book'
        },
        {
          name: 'Video',
          url: '/media/video',
          icon: 'fa fa-video-camera'
        }
      ]
    },
    {
      title: true,
      name: 'Permission'
    },
    {
      name: 'Quản lý permission',
      url: '/permission',
      icon: 'fa fa-lock',
      children: [
        {
          name: 'Danh sách',
          url: '/permission/list',
          icon: 'icon-list'
        },
        {
          name: 'Thêm permission',
          url: '/permission/create',
          icon: 'icon-pencil'
        }
      ]
    },
    {
      name: 'Phân quyền Group',
      url: '/group-user',
      icon: 'fa fa-users',
      children: [
        {
          name: 'Danh sách Group',
          url: '/group-user/list',
          icon: 'icon-list'
        }
      ]
    },
    {
      name: 'SSQA',
      url: 'http://coreui.io/pro/vue/',
      icon: 'icon-cloud-download',
      class: 'mt-auto',
      variant: 'success'
    },
    {
      name: 'Hướng dẫn sử dụng',
      url: 'http://coreui.io/pro/vue/',
      icon: 'icon-layers',
      variant: 'primary'
    }
  ]
}
