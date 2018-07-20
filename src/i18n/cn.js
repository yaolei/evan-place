export default {
    pos: {
        search: '查询',
        configuration: '配置',
        language: '语言',
        theme: {
            name: '模版',
            light: '高亮',
            dark: '暗黑',
        },
        dashboard: {
            monthly_revenue: '月收入',
            new_orders: '新订单',
            pending_reviews: '等待审核',
            new_customers: '新客户',
            pending_orders: '等待的订单',
            order: {
                items: 'by %{customer_name}, one item |||| by %{customer_name}, %{nb_items} items',
            },
            welcome: {
                title: '欢迎进入xxx后台管理系统',
                subtitle: '这是一个方便快捷的管理系统。可以自由地查询和修改数据 - it\'s 数据服务于你本地，每次刷新后都可以重置.',
                aor_button: '首页网站 ',
                demo_button: '代码位置',
            },
        },
    },
    resources: {
        customers: {
            name: '客户 |||| 客户群',
            fields: {
                commands: '订单',
                groups: '片段',
                last_seen_gte: '最后登录时间',
                name: '名字',
            },
            tabs: {
                identity: '身份',
                address: '地址',
                orders: '所有订单',
                reviews: '预览',
                stats: '状态',
            },
            page: {
                delete: '删除客户',
            },

        },
        commands: {
            name: '订单 |||| 所有订单',
            fields: {
                basket: {
                    delivery: '已完成订单',
                    reference: '参考',
                    quantity: '数量',
                    sum: '总和',
                    tax_rate: '税率',
                    total: '全部',
                    unit_price: '单价',
                },
                customer_id: '客户',
                date_gte: 'Passed 从',
                date_lte: 'Passed 到',
                total_gte: '最小金额',
            },
        },
        products: {
            name: '海报 |||| 所有海报',
            fields: {
                category_id: '分类',
                height_gte: '最小高度',
                height_lte: '最大高度',
                height: '高度',
                image: '图片',
                price: '价格',
                reference: '参考',
                stock_lte: '最低股票',
                stock: '股票',
                thumbnail: '缩略图',
                width_gte: '最小宽度',
                width_lte: '最大宽度',
                width: '宽度',
            },
            tabs: {
                image: '图片',
                details: '详情',
                description: '描述',
                reviews: '评论',
            },
        },
        categories: {
            name: '类别 |||| 所有类别',
            fields: {
                products: '产品',
            },

        },
        reviews: {
            name: '审核 |||| 全部审核',
            fields: {
                customer_id: '客户',
                command_id: '订单',
                product_id: '产品',
                date_gte: '发送日期 从',
                date_lte: '从到日期 到',
                date: '日期',
                comment: '留言',
                rating: '评级',
            },
            action: {
                accept: '接受',
                reject: '拒绝',
            },
            notification: {
                approved_success: '审核批准',
                approved_error: '错误：审核没有通过',
                rejected_success: '审核拒绝',
                rejected_error: '错误： 审核被拒绝',
            },
        },
        segments: {
            name: 'Segments',
            fields: {
                customers: '客户',
                name: '名字',
            },
            data: {
                compulsive: '强制性',
                collector: '收集器',
                ordered_once: '订购一次',
                regular: '常规的',
                returns: '返回',
                reviewer: '评论家',
            },
        },
    },
};
