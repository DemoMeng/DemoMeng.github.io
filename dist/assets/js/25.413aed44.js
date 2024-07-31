(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{414:function(n,a,s){"use strict";s.r(a);var e=s(54),t=Object(e.a)({},(function(){var n=this,a=n.$createElement,s=n._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"arraylist"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arraylist"}},[n._v("#")]),n._v(" ArrayList")]),n._v(" "),s("ol",[s("li",[n._v("底层使用数组")]),n._v(" "),s("li",[n._v("有序排列，可以重复")]),n._v(" "),s("li",[n._v("查询、修改速度快（setter()和getter()快），增加、删除速度慢")]),n._v(" "),s("li",[n._v("线程不安全的:\n多线程下会争抢数组的存放资格，在 add() 过程中会抛出异常：ConcurrentModificationException (并行修改异常)")])]),n._v(" "),s("h2",{attrs:{id:"vector-是arraylist线程不安全的解决方式之一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vector-是arraylist线程不安全的解决方式之一"}},[n._v("#")]),n._v(" Vector（是ArrayList线程不安全的解决方式之一 ）")]),n._v(" "),s("ol",[s("li",[n._v("底层使用数组")]),n._v(" "),s("li",[n._v("排列有序，可以重复")]),n._v(" "),s("li",[n._v("查询、修改速度快（setter()和getter()快），增加、删除速度慢")]),n._v(" "),s("li",[n._v("线程安全，但是效率低 （所有的方法都上了 synchronized 锁）")]),n._v(" "),s("li",[n._v("容量不够时，Vector扩容至2倍")])]),n._v(" "),s("p",[n._v("// Vector的add方法源码")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("public synchronized boolean add(E e) {\n    modCount++;\n    ensureCapacityHelper(elementCount + 1);\n    elementData[elementCount++] = e;\n    return true;\n}\n\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br")])]),s("p",[n._v("// Vector扩容方法源码")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("private void grow(int minCapacity) {\n    // overflow-conscious code\n    int oldCapacity = elementData.length;\n    int newCapacity = oldCapacity + ((capacityIncrement > 0) ?\n                                     capacityIncrement : oldCapacity);\n    if (newCapacity - minCapacity < 0)\n        newCapacity = minCapacity;\n    if (newCapacity - MAX_ARRAY_SIZE > 0)\n        newCapacity = hugeCapacity(minCapacity);\n    elementData = Arrays.copyOf(elementData, newCapacity);\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br")])]),s("h2",{attrs:{id:"linkedlist"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linkedlist"}},[n._v("#")]),n._v(" LinkedList")]),n._v(" "),s("p",[n._v("LinkedList 底层使用的是双向链表结构 （JDK1.6之前的为 循环链表，1.7之后取消了循环链表）\nLinkedList 如果是在头、尾插入、删除元素则不受元素位置的影响（addFirst()、addLast()、removeFirst()、removeLast()），他们的时间复杂度为: O(1)\n如果是在指定的位置 i 插入、删除元素（ add()、 remove() ），时间负责度则为： O(i)，因为需要先移动到指定位置再插入\nLinkedList 不支持快速高效的随机访问，ArrayList则是支持的，因为实现了 RandomAccess接口，快速高效访问元素就是通过元素下标获取： get(index)\n因为ArrayList底层是数组结构，所以天然就支持快速高效的随机访问。\nLinkedList 的存储空间要比 ArrayList高，因为 LinkedList需要存放后面元素和前面元素的数据。")]),n._v(" "),s("h2",{attrs:{id:"如何解决多线程下arraylist的线程不安全问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何解决多线程下arraylist的线程不安全问题"}},[n._v("#")]),n._v(" 如何解决多线程下ArrayList的线程不安全问题 ？")]),n._v(" "),s("ol",[s("li",[n._v("使用 JUC下的 CopyOnWriteArrayList")]),n._v(" "),s("li",[n._v("使用： List"),s("Object",[n._v(" objects = Collections.synchronizedList(new ArrayList<>());")])],1),n._v(" "),s("li",[n._v("使用 Vector 代替 ArrayList")])]),n._v(" "),s("h2",{attrs:{id:"copyonwritearraylist-线程安全的-arraylist的替代品"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copyonwritearraylist-线程安全的-arraylist的替代品"}},[n._v("#")]),n._v(" CopyOnWriteArrayList : 线程安全的，ArrayList的替代品")]),n._v(" "),s("p",[n._v("Copy On Write: 首先需要定一个可重入锁，随后在添加元素时，不会在旧的数组中添加，而是在旧的数组上拷贝一份成新数组，并且容量+1，然后将元素添加到新的数组中后，\n将原有的引用指向新的数组。 因为数组是 Volatile 修饰的，所以其他线程都是能读取同一份数组。")]),n._v(" "),s("p",[n._v("// CopyOnWriteArrayList的add源码")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("\n/**\n * Appends the specified element to the end of this list.\n *\n * @param e element to be appended to this list\n * @return {@code true} (as specified by {@link Collection#add})\n */\npublic boolean add(E e) {\n    final ReentrantLock lock = this.lock;\n    lock.lock();\n    try {\n        Object[] elements = getArray();\n        int len = elements.length;\n        Object[] newElements = Arrays.copyOf(elements, len + 1);\n        newElements[len] = e;\n        setArray(newElements);\n        return true;\n    } finally {\n        lock.unlock();\n    }\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br")])]),s("p",[n._v("// 发现最终新扩容的数组赋值到了 array,并且这个变量是被 Volatile 修饰的，是线程间共享的变量（该变量不会独立某个线程的CPU缓存中，而是在主内存上，所以共享）")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("\nprivate transient volatile Object[] array;\n\nfinal void setArray(Object[] a) {\n    array = a;\n}\n\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br")])]),s("h2",{attrs:{id:"reentrantlock-和-synchronized-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reentrantlock-和-synchronized-的区别"}},[n._v("#")]),n._v(" ReentrantLock 和 Synchronized 的区别")]),n._v(" "),s("ul",[s("li",[n._v("相同点")])]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("1. 都是用来协调多线程对共享变量、对象的访问\n2. 都是可重入锁，同一个线程可以多次获得同一个锁\n3. 都保证了可见性和互斥性\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br")])]),s("ul",[s("li",[n._v("区别：")])]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("1. ReentrantLock的上锁、释放锁都要手动，Synchronized是无需手动\n2. ReentrantLock 可响应中断， synchronized 是不可以响应中断的，为处理锁的不可用性提供了更高的灵活性\n3. ReentrantLock 是 API 级别的， synchronized 是 JVM 级别的\n4. ReentrantLock 可以实现公平锁、非公平锁\n5. ReentrantLock 通过 Condition 可以绑定多个条件\n6. 底层实现不一样， synchronized 是同步阻塞，使用的是悲观并发策略， lock 是同步非阻塞，采用的是乐观并发策略\n\n\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);