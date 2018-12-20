1.基础接口
  1.1：用户权限表，用来渲染用户的路由表'/permission'
      menu:[
        {
          name: "用户管理",
          path: "/userManagment",
          accessible: true,
          children:[
            btnpermissions
          ]
        }
      ]