(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{446:function(s,a,n){"use strict";n.r(a);var e=n(54),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"docker集群"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker集群"}},[s._v("#")]),s._v(" docker集群")]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"111",href:"docker-cluster.png"}},[n("img",{attrs:{src:"docker-cluster.png",alt:"img.png"}})])]),s._v(" "),n("p",[s._v("Swarm (Swarm kit) 在 Docker 1.12之前是一个独立的项目，在Docker 1.12之后，就集成到了 Docker中。\n是Docker官方提供唯一原生Docker集群管理的工具。它可以把多个 Docker 主机组成的系统转换成单一的虚拟Docker主机，使得容器可以组成跨主机的子网网格。")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("Node\n是Docker的一个节点，在一台机器上可以运行一个或者多个节点，节点包含管理节点和工作节点，是典型的Master-Slave模型\n默认情况下，管理节点也将作为服务的工作节点，可以配置管理节点专门作为管理器，只做管理，不做服务部署。这样管理节点就是只分配任务到其他工作节点。\n工作节点会将管理节点分配的任务的当前状态通知给管理节点，以便管理节点可以保持每个工作节点的期望状态")])]),s._v(" "),n("li",[n("p",[s._v("Service\n基于容器的上层概念，可以设置副本、重启策略、升级策略、可以启动、停止、删除、更新等一系列操作。一个Service对应多个容器（副本）。")])]),s._v(" "),n("li",[n("p",[s._v("Stack\n是Service执行实体")])])]),s._v(" "),n("h1",{attrs:{id:"docker集群工作模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker集群工作模式"}},[s._v("#")]),s._v(" docker集群工作模式")]),s._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"111",href:"集群节点工作模式.png"}},[n("img",{attrs:{src:"%E9%9B%86%E7%BE%A4%E8%8A%82%E7%82%B9%E5%B7%A5%E4%BD%9C%E6%A8%A1%E5%BC%8F.png",alt:"img.png"}})])]),s._v(" "),n("ul",[n("li",[s._v("管理节点\n任务：1. 维护集群状态\n2. 调度服务\n3. 服务集群模式下提供的HTTP API端口服务")])]),s._v(" "),n("p",[s._v("使用 Raft实现，管理节点负责docker集群和所运行服务的一致内部状态。一般来说测试环境可以使用单个管理节点来管理集群，\n如果管理节点发生故障，docker集群则无法继续运行，可以新建一个集群才能恢复！")]),s._v(" "),n("p",[s._v("为了利用Swarm模式的容错性，建议根据docker集群机器的奇数个节点。当设置了多个管理节点（备用节点）后，docker会自动切换管理节点，无需停机。（需要手动调整故障节点）\n一般管理节点最多不能超过 7 个")]),s._v(" "),n("p",[s._v("多个管理节点的情况下，允许部分管理节点故障，情况如下：\n3个节点允许1个节点故障\n5个节点允许2个节点故障\nn个节点允许（n-1）/2个节点故障")]),s._v(" "),n("p",[s._v("注意： 添加多个管理节点并不是为了高扩展、高性能的实现，而是为了保证swarm集群在管理节点故障情况下而不停机，相反，设置过多管理节点会对扩展性、提高性能带来阻碍")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("工作节点\n工作节点也是Docker实例，唯一的工作就是运行服务。worker节点不参与 Raft 分布式状态，不做调度决策，也不提供于 swarm模式的HTTP API")])]),s._v(" "),n("li",[n("p",[s._v("节点角色变更\n参考 docker node demote\ndocker node promote")])])]),s._v(" "),n("h1",{attrs:{id:"raft-consensus-algorithm-分布式raft一致性算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#raft-consensus-algorithm-分布式raft一致性算法"}},[s._v("#")]),s._v(" Raft Consensus Algorithm ： 分布式Raft一致性算法")]),s._v(" "),n("p",[s._v("Docker 在 Swarm集群下，Docker管理节点使用 Raft 一致性算法来保证全局节点的状态。\n在集群下，出现一致性状态问题的情况是在 Manager 节点，任何 Manager节点都可以接收到任务，并且将服务恢复到稳定状态。\n比如：如果集群中负责任务调度的 Leader Manger节点发生故障而死掉，任何一个 Manager节点均可以接收其调度任务并且重新平衡任务以匹配节点的状态。\nRaft 最多可以容忍 （n-1）/2 个manager节点故障，并且需要（n-1）/2 个manager成员的多数或法定人数才能提议给集群值达成一致。比如：若5个Manager节点中，\n如果3个节点不可用，系统则无法处理任何请求来调度额外的任务。现有的任务继续运行，但如果管理器集不健康，调度程序无法重新平衡任务。")]),s._v(" "),n("h1",{attrs:{id:"集群搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集群搭建"}},[s._v("#")]),s._v(" 集群搭建")]),s._v(" "),n("ul",[n("li",[s._v("开放端口：主机之间的开放协议和端口\n用于集群管理通信的 TCP 端口 2377\nTCP 和 UDP 端口 7946 用于节点之间的通信\n覆盖网络流量的 UDP 端口 4789")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("修改主机的hostname\n    hostname: 查看当前主机的hostname\n    hostnamectl set-hostname 192.168.2.11 : 修改hostname为192.168.2.11\n\n1. docker swarm init --advertise-addr 192.168.2.9\n        \n        docker swarm join --token SWMTKN-1-2tk3yqmcwp4woityf8bym462bv9a3g4n8k6syu8qqq7t09go93-1mz1za31i7wyz4aozygwc4twp 192.168.2.9:2377\n        \n        docker swarm join --token SWMTKN-1-1ztuq8elm4q26x9nx8jho5kup65x51g0wyln5ejpji0i64tzxx-4t1hzdqkrltvu06d6iop0rcts 192.168.1.0:2377\n        \n        外网： \n        docker swarm join --token SWMTKN-1-472gvgjretyhq3oj4h3ztmr7aoa5l93th7zphs9chwx9g8vx7z-cyw62kzspua2kdlv3spl16m58 139.155.180.57:2377\n        \n        docker swarm join --token SWMTKN-1-4z7selwr9uz7iupbb5717x0slhien936x6wxfkc8g93nruuirv-5ul3ov1gn4j50ny0br02y7tul 106.12.187.16:2377\n        \n        docker swarm join --token SWMTKN-1-62wx6qpm11l76im03gif6bzrhreilznztupo4f7n2zhfxddoam-3rm38xhvgdvfmxm6hxt6pqpdt 192.168.2.9:2377\n        \n        docker swarm join --token SWMTKN-1-4zjbxfbf1n9cqto0ndyufnwgt7fy3oyrawhetpmh2uu27hnv8p-3zox0xnrjsnq0l2zucm7ltth9 192.168.2.7:2377\n        \n2. docker info ： 查看docker信息，包含了主、从节点信息\n        \n3. docker node ls : 查看节点状态\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("p",[n("a",{attrs:{"data-fancybox":"",title:"111",href:"docker-cluster-1.png"}},[n("img",{attrs:{src:"docker-cluster-1.png",alt:"img_1.png"}})])]),s._v(" "),n("p",[s._v("#部署服务")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('\n1. docker-compose.yml文件：\n\nversion: "3.3"\nservices:\n  qingwang-user:\n    image: registry.cn-hangzhou.aliyuncs.com/my-cloud-namespace/qingwang-admin:0.0.3\n    environment:\n      JAVA_AGENT_OPTS: ""\n    deploy:\n      replicas: 3\n    volumes:\n      - /root/mqz/log/qingwang-admin/logs/:/home/mqz/qingwang-user-0.0.1/logs/\n    ports:\n      - "2000:2000"\n    networks:\n      - test\n    restart: on-failure\nnetworks:\n  test:\n    external: true\n\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("h2",{attrs:{id:"docker-swarm-模式下的命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-swarm-模式下的命令"}},[s._v("#")]),s._v(" docker swarm 模式下的命令")]),s._v(" "),n("h3",{attrs:{id:"docker-network"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-network"}},[s._v("#")]),s._v(" docker network")]),s._v(" "),n("ul",[n("li",[s._v("docker network create --scope=swarm qingwang-module-test ： 创建网络")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("     指定网段：\n       docker network create --driver overlay --subnet=192.168.0.0/24  --gateway=192.168.0.254  qingwang-module-test\n       docker network create --driver overlay --subnet=192.168.0.0/24  --gateway=192.168.0.254  qingwang-module-test\n       docker network create --driver overlay --subnet=192.168.2.0/24  --gateway=192.168.2.254  qingwang-module-1\n       docker network create -d overlay --attachable qingwang-module-test\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ul",[n("li",[s._v("docker network ls  : 查看网络")]),s._v(" "),n("li",[s._v("docker network inspect qingwang-module-test ： 查看网络具体信息")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("   docker network inspect qingwang-module-test |grep Subnet  \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"docker-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-node"}},[s._v("#")]),s._v(" docker node")]),s._v(" "),n("ul",[n("li",[s._v("docker node ls：  查看集群节点信息\n节点 ID 旁边的 * 表示您当前已连接到该节点")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@rabbit_host22 ~]# docker node ls \nID                            HOSTNAME             STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION\nlj9jbfbvhd9m0zt76k24rfuw7     192.168.2.10node10   Ready     Active                          20.10.14\nn4mj7p8u9rr4hc99offv6xac9     rabbit_host11        Ready     Active                          20.10.7\n0xulzz4pl2mbft6ca0ggr8ubu *   rabbit_host22        Ready     Active         Leader           20.10.5\n\nAVAILABILITY: Active 、 Pasue 、 Drain\nActive： 调度任务程序可以将部署任务分配给该节点\nPasue：  调度任务程序将不会再将新部署任务分配给该节点，但是现有任务仍保持运行\nDrain：  调度任务程序将不会再将新部署任务分配给该节点，并且调度任务程序会关闭该节点所有部署的任务实例\n\n\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("ul",[n("li",[n("p",[s._v("docker node demote 节点id ： 降级管理节点节点为工作节点")])]),s._v(" "),n("li",[n("p",[s._v("dokcer node rm : 删除工作节点，工作节点退出docker集群后，status为down，这时候可以删除工作节点")])]),s._v(" "),n("li",[n("p",[s._v("docker node promote 节点id： 升级节点为管理节点备用节点\n集群状态变为 Reachable（选举者），因为集群中节点Leader只能有一个，\n这个类似zookeeper，只不过zookeepers用的算法是paxos，Swarm用的算法是raft。\n如果管理节点需要退出，需要先降级为工作节点才能执行 docker node rm 节点id")])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@rabbit_host22 ~]# docker node promote n4mj7p8u9rr4hc99offv6xac9\nNode n4mj7p8u9rr4hc99offv6xac9 promoted to a manager in the swarm.\n[root@rabbit_host22 ~]# docker node ls \nID                            HOSTNAME             STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION\nlj9jbfbvhd9m0zt76k24rfuw7     192.168.2.10node10   Ready     Active                          20.10.14\nn4mj7p8u9rr4hc99offv6xac9     rabbit_host11        Ready     Active         Reachable        20.10.7\n0xulzz4pl2mbft6ca0ggr8ubu *   rabbit_host22        Ready     Active         Leader           20.10.5\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"docker-swarm-命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-swarm-命令"}},[s._v("#")]),s._v(" docker swarm 命令")]),s._v(" "),n("ul",[n("li",[s._v("docker swarm init : 初始化当前机器为docker集群管理节点")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker swarm init --advertise-addr 192.168.2.11\n\n返回： \nSwarm initialized: current node (0xulzz4pl2mbft6ca0ggr8ubu) is now a manager.\n\nTo add a worker to this swarm, run the following command:\n\n    docker swarm join --token SWMTKN-1-47jzjdpcpyif6bojpojnuifz6pvw8d69jafbhofq0127zfaamv-c8rjboxcf1i1mogxgxqzy0uin 192.168.2.11:2377\n\nTo add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("ul",[n("li",[s._v("docker swarm join : 加入集群")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('问题： \n[root@192 ~]# docker swarm join --token SWMTKN-1-47jzjdpcpyif6bojpojnuifz6pvw8d69jafbhofq0127zfaamv-c8rjboxcf1i1mogxgxqzy0uin 192.168.2.11:2377\nError response from daemon: rpc error: code = Unavailable desc = connection error: desc = "transport: Error while dialing dial tcp 192.168.2.11:2377: connect: no route to host"\n解决： 主节点防火墙没有开放 2377 端口，导致从节点无法和主节点通信\n\n[root@rabbit_host22 ~]# firewall-cmd --query-port=2377/tcp #查询2377端口是否开放\nno\n[root@rabbit_host22 ~]# firewall-cmd --zone=public --add-port=2377/tcp --permanent #放行2377端口 \nsuccess\n[root@rabbit_host22 ~]# firewall-cmd --reload #重载防火墙\nsuccess\n[root@rabbit_host22 ~]# firewall-cmd --query-port=2377/tcp \nyes\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("ul",[n("li",[s._v("docker swarm leave: 工作节点退出docker集群")]),s._v(" "),n("li",[s._v("docker swarm leave --force : 管理节点退出docker集群")])]),s._v(" "),n("h3",{attrs:{id:"docker-service"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-service"}},[s._v("#")]),s._v(" docker service")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(" docker service :\n       create: 创建服务\n       inspect: 显示服务的详细信息\n       ls: 查看所有服务 \n       rm: 删除服务，同时会删除服务的子节点的服务容器\n       update: 更新服务\n       ps: 查看服务部署详情\n       scale: 服务启动后，扩容或者缩容： kibxp4l80var是服务id，4是设置的副本数量     \n              docker service scale kibxp4l80var=4  \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[n("a",{attrs:{"data-fancybox":"",title:"111",href:"docker-cluster-1.png"}},[n("img",{attrs:{src:"docker%E6%9F%A5%E7%9C%8B%E9%9B%86%E7%BE%A4%E6%9C%8D%E5%8A%A1%E9%83%A8%E7%BD%B2%E6%83%85%E5%86%B5.png",alt:"img.png"}})])]),s._v(" "),n("h3",{attrs:{id:"docker-stack"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-stack"}},[s._v("#")]),s._v(" docker stack")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker stack:\n       deploy: 发布或者更新一个或者多个stack\n       ls:  查看所有stack\n       rm:  删除stack\n       ps:  查看stack\n       services:  查看所有stack服务，和docker servcie ls 效果一致                   \n  docker stack deploy -c qingwang-module.yml --with-registry-auth qingwang_module\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);