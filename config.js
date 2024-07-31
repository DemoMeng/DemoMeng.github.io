module.exports = {
    title: '蒙大拿',
    description: '蒙大拿的博客',
    // ngixn 无法找到样式问题配置
    base: '/mengqizhang/',
    //base: './',
    // 引入图片缩放插件
    head: [
        ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js' }],
        ['script', { charset: 'utf-8', src: 'https://my.openwrite.cn/js/readmore.js' }],
        ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js' }],
        ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css' }]
    ],
    //theme: '@vuepress/blog',
    //theme: 'melodydl',
    markdown: { // markdown 插入代码时展示对应行数
        lineNumbers: true
    },
    footer: {
        record: '京ICP备2021xxxxx2号', // 备案号
        year: '2017',
    },
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            //{ text: 'redis', link: '/redis/' },
            //{ text: 'mq', link: '/rabbitMQ/' },
            { text: '关于我', link: 'https://gitee.com/DemoMeng' },
        ],
        sidebar: [
            {
                title: '面试 📖🔥🔥',
                children: [
                    {title:'java',path:'/面试题/'},
                ],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            },
            {
                title: '环境配置 🔧',
                path: '/环境配置/',
                children: [
                    {title:'java-jdk',path:'/环境配置/java-jdk'},
                    {title:'git',path:'/环境配置/git'},
                    {title:'jenkins',path:'/环境配置/jenkins'},
                    {title:'redis',children: [
                            {title:'安装',path:'/环境配置/redis/redis'},
                    ]},
                    {title:'mysql',children: [
                            {title:'安装',path:'/环境配置/mysql/mysql'},
                    ]},
                    {title:'nacos',children: [
                            {title:'安装',path:'/环境配置/nacos/nacos'},
                    ]},
                    {title:'idea',path:'/环境配置/idea'},
                    {title:'maven',path:'/环境配置/maven'},
                    {title:'nginx',path:'/环境配置/nginx'},
                    {title:'rabbitMQ',path:'/环境配置/rabbitMQ'}
                ],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            },
            {
                title: '消息队列 🔥🔥🔥',
                path: '/消息队列/',
                children: [
                    {
                        title:'rabbitMQ',
                        children: [
                            {title:'rabbitMQ',path:'/消息队列/rabbitMQ/'},
                            {title:'集群',path:'/消息队列/rabbitMQ/集群'},
                            {title:'安装',path:'/消息队列/rabbitMQ/install'},
                            {title:'常规队列',path:'/消息队列/rabbitMQ/usually-queue'},
                            {title:'死信队列',path:'/消息队列/rabbitMQ/dead-queue'},
                            {title:'延迟队列',path:'/消息队列/rabbitMQ/delay-queue'}
                        ]
                    },
                    {
                        title:'rocketMQ',
                        path:'/消息队列/rocketMQ/'
                    }
                ],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            },
            {
                title: '数据层 🔥🔥🔥',
                path: '/数据层/',
                children: [
                    {
                        title:'mysql',children: [
                            {title:'简介',path:'/数据层/mysql/'},
                            {title:'集群',path:'/数据层/mysql/mysql集群'},
                            {title:'读写分离',path:'/数据层/mysql/读写分离'},
                            {title:'ApacheShardingSphere',path:'/数据层/mysql/ApacheShardingSphere介绍'},
                            {title:'binlog',path:'/数据层/mysql/binlog'},
                            {title:'分库分表',path:'/数据层/mysql/分库分表'},
                            {title:'SQL优化',path:'/数据层/mysql/SQL'},
                            {title:'redo日志',path:'/数据层/mysql/redo'},
                            {title:'mysql索引数据结构',path:'/数据层/mysql/mysql索引数据结构'},
                            {title:'面试题',path:'/数据层/mysql/面试题'}
                        ]
                    },
                    {
                        title:'mybatis',children: [
                            {title:'介绍',path:'/数据层/mybatis/'},
                            {title:'SQL耗时统计',path:'/数据层/mybatis/SQL耗时统计'}
                        ]
                    },
                    {
                        title: 'Redis',   // 必要的
                        // path: '/数据层/redis/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        collapsable: true, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1
                        children: [
                            {title:'redis基础',children: [
                                {title:'redis',path:'/数据层/redis/'},
                                {title:'redis6新特性',path:'/数据层/redis/redis6.0新特性'},
                            ]},
                            {title:'redis配置',children:[
                                {title:'redis配置文件',path:'/数据层/redis/redis-conf'},
                                {title:'redis-sentinel配置文件',path:'/数据层/redis/redis-sentinel'},
                                {title:'redis6配置文件',path:'/数据层/redis/redis6-conf'},
                            ]},
                            {title:'redis高可用',children:[
                                {title:'redis高可用-哨兵模式',path:'/数据层/redis/redis高可用-sentinel'},
                                {title:'redis高可用-集群',path:'/数据层/redis/redis-集群'},
                            ]},
                            {title:'redis应用场景',children:[
                                    {title:'redis实现布隆过滤器',path:'/数据层/redis/Redis实现BloomFilter'},
                                    {title:'redis实现分布式锁', path:'/数据层/redis/Redis实现分布式锁'}
                            ]},
                        ]
                    },
                ],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            },
            {
                title: '容器化 🐳',
                path: '/容器化/',
                children: [
                    {title:'docker',
                        children: [
                            {title:'基础',path:'/容器化/docker/docker'},
                            {title:'docker安装',path:'/容器化/docker/docker-install'},
                            {title:'docker-swarm集群',path:'/容器化/docker/docker-swarm'},
                            {title:'docker私服',path:'/容器化/docker/docker私服'},
                            {title:'docker-springboot打包使用',path:'/容器化/docker/docker-springboot打包使用'}
                        ]
                    },
                    {
                        title: 'portainer容器管理工具',
                        children: [
                            {title:'首页',path:'/容器化/portainer/'}
                        ]
                    },
                ],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            },
            {
                title: 'Java ☕️',
                path: '/java/',
                children: [
                    {title:'Java',path:'/java/'},
                    {title:'JVM',path:'/java/jvm/jvm'},
                    {title:'spring框架',
                        children: [
                            {title:'spring',path:'/java/springboot/Spring'},
                            {title:'springBoot',path:'/java/springboot/'}
                        ]

                    },
                    {title:'多线程',
                        children: [
                            {title:'简介',path:'/java/多线程/'},
                            {title:'合理使用线程池',path:'/java/多线程/合理使用线程池'},
                            {title:'spring中使用多线程',path:'/java/多线程/springBoot中多线程使用及@Async解析'},
                            {title:'Volatile',path:'/java/多线程/Volatile'},
                            {title:'CAS',path:'/java/多线程/CAS'},
                        ]
                    },
                    {title:'java集合',path:'/java/集合/',
                        children: [
                            {title:'ArrayList',path:'/java/集合/ArrayList'},
                            {title:'HashMap',path:'/java/集合/HashMap'},
                            {title:'HashSet',path:'/java/集合/HashSet'},
                        ]
                    },
                ],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            },
            {
                title: '分布式事务',
                children: [
                    {title:'介绍',path:'/分布式事务/'},
                    {title:'seata-server服务端',path:'/分布式事务/seata-server'},
                    {title:'seata-server客户端',path:'/分布式事务/seata-client'}
                ],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            },
            {
                title: '分布式系统 ☁️',
                children: [
                    {title:'介绍',path:'/分布式系统/'},
                    {title:'dubbo-zookeeper',path:'/分布式系统/dubbo-zookeeper/'},
                    {title:'springcloud',
                        children: [
                            {title:'示例项目',path:'/分布式系统/springcloud/'},
                            {title:'Eureka',path:'/分布式系统/springcloud/Eureka'},
                            {title:'Hystrix',path:'/分布式系统/springcloud/Hystrix'},
                            {title:'SpringCloudConfig',path:'/分布式系统/springcloud/SpringCloudConfig'},
                        ]
                    },
                    {title:'springcloud-alibaba',
                        children: [
                            {title:'示例项目',path:'/分布式系统/springcloud-alibaba/'},
                            {title:'服务注册中心/配置中心-Nacos',path:'/分布式系统/springcloud-alibaba/nacos'},
                            {title:'服务通信调用-OpenFeign',path:'/分布式系统/springcloud-alibaba/openfeign'},
                            {title:'网关-Gateway',path:'/分布式系统/springcloud-alibaba/gateway'}
                        ]
                    },
                    {title:'灰度发布',path:'/分布式系统/灰度发布/'},
                    {title:'分布式锁',
                        children: [
                            {title:'简介',path:'/分布式系统/分布式锁/'},
                            {title:'redis分布式锁',path:'/分布式系统/分布式锁/Redis分布式锁'},
                            {title:'redisson分布式锁',path:'/分布式系统/分布式锁/Redisson分布式锁'},
                            {title:'zookeeper分布式锁',path:'/分布式系统/分布式锁/Zookeeper分布式锁'}
                        ]
                    }
                ],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            },
            {
                title: 'webSocket',
                children: [
                    {title:'首页',path:'/webSocket/'},
                    {title:'springboot集成websocket',path:'/webSocket/springboot-websocket'}
                ],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            },
            {
                title: 'Maven',
                children: [
                    {title:'简介',path:'/maven/'},
                    {title:'nexus私服',path:'/maven/nexus私服'}
                ],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            },
            {
                title: 'ELK 🔍',
                children: [
                    {title:'介绍',path:'/elk/'},
                    {title:'Elasticsearch',path:'/elk/elasticsearch'},
                    {title:'Filebeat',path:'/elk/filebeat'},
                    {title:'Kibana',path:'/elk/kibana'},
                    {title:'Logstash',path:'/elk/logstash'},
                ],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            },

            {
                title: 'nginx 🇷🇺',
                children: [
                    {title:'首页',path:'/nginx/'},
                    {title:'nginx.conf',path:'/nginx/nginx.conf'},
                    {title:'增强版',path:'/nginx/Nginx'}
                ],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            },
            {
                title: 'jenkins 👴',
                children: [
                    {title:'首页',path:'/jenkins/'},
                ],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            },
            {
                title: '服务器 💰',
                children: [
                    {title:'首页',path:'/运维/'},
                ],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            },
            {
                title: '测试 😓',
                children: [
                    {title:'首页',path:'/测试/'},
                ],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            },
            {
                title: '监控告警',
                children: [
                    {title:'介绍',path:'/监控告警/'},
                    {title:'prometheus',path:'/监控告警/prometheus'},
                    {title:'grafana',path:'/监控告警/grafana'}
                ],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            },

        ]
    },
    startYear: '2021',// 项目开始时间，只填写年份
    author: '蒙大拿',//设置全局作者

}