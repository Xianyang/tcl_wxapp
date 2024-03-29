// imageViewer.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imageSrc: "../../images/minions_1.jpeg",
    minions: ["../../images/minions_1.jpeg",
    "../../images/minions_2.jpeg",
    "../../images/minions_3.jpeg",
    "../../images/minions_4.jpeg",
    "../../images/minions_5.jpeg",
    "../../images/minions_6.jpeg",
    ],
    isChosen: [true, false, false, false, false, false],
    borderStyles: ["solid", "hidden", "hidden", "hidden", "hidden", "hidden"],
  },
  optionChosen: function(e) {
    var that = this
    var optionArray = that.data.isChosen;
    var borderArray = that.data.borderStyles;
    var object_id = e.currentTarget.id.slice(-1);
    if (optionArray[object_id]) {
      return
    }

    console.log(optionArray)
    for (var i = 0; i < optionArray.length; i++) {
      optionArray[i] = false
      borderArray[i] = "hidden"
    }
    optionArray[object_id] = true
    borderArray[object_id] = "solid"
    that.setData({
      isChosen: optionArray,
      borderStyles: borderArray,
      imageSrc: that.data.minions[object_id]
    })
  },
  scroll: function(e) {
    
  },
})