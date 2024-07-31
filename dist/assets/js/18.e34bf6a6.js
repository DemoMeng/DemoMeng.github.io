(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{406:function(n,t,s){"use strict";s.r(t);var i=s(54),a=Object(i.a)({},(function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"spring"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring"}},[n._v("#")]),n._v(" Spring")]),n._v(" "),s("h2",{attrs:{id:"spring-事务隔离级别和-事务传播机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-事务隔离级别和-事务传播机制"}},[n._v("#")]),n._v(" Spring 事务隔离级别和 事务传播机制")]),n._v(" "),s("ul",[s("li",[s("p",[n._v("1.事务隔离级别是对事务4大特性中隔离性的具体体现，使用事务隔离级别可以控制并发事务在同时执行的某种行为")])]),n._v(" "),s("li",[s("p",[n._v("2.场景： 比如有两个事务同时操作同一张表，此时一个事务修改了数据，但是未提交，另外一个事务能读取到最新数据、或者不能读取到最新数据。\n这个是可以通过设置隔离机制来控制。")])]),n._v(" "),s("li",[s("ol",{attrs:{start:"3"}},[s("li",[n._v("mysql的隔离机制")])])]),n._v(" "),s("li",[s("ol",{attrs:{start:"4"}},[s("li",[n._v("spring的隔离级别：")])])])]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("DEFAULT(TransactionDefinition.ISOLATION_DEFAULT),                     : Spring中默认事务隔离级别\nREAD_UNCOMMITTED(TransactionDefinition.ISOLATION_READ_UNCOMMITTED),   : 读未提交\nREAD_COMMITTED(TransactionDefinition.ISOLATION_READ_COMMITTED),       : 读已提交\nREPEATABLE_READ(TransactionDefinition.ISOLATION_REPEATABLE_READ),     : 可重复读\nSERIALIZABLE(TransactionDefinition.ISOLATION_SERIALIZABLE);           : 可串行化\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br")])]),s("p",[n._v("Spring设置隔离级别 @Transactional(isolation = Isolation.DEFAULT) 进行设置\n若是Spring设置了隔离级别，则会覆盖Mysql的设置个隔离机制。")]),n._v(" "),s("ul",[s("li",[s("ol",{attrs:{start:"5"}},[s("li",[n._v("Spring事务的传播机制")])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);