swissbib.AdvancedSearch = {

  catTreeAutoSend: false,


  /**
   * Initialize when in advanced search view
   */
  init: function () {
    if (this.isInAdvancedSearch()) {
      this.initJsTree();
    }
  },

  /**
   * @return void
   */
  initJsTree: function () {
    jQuery(".classification-tree").jstree().bind("select_node.jstree", this.onJsTreeSelectNode);
  },

  onJsTreeSelectNode: function (event, data) {
    var el = jQuery('#' + data.selected[0]);

    el.toggleClass("selected");
    el.hasClass("selected") ? el.find("input").attr("name", "filter[]") : el.find("input").removeAttr("name");

    if (swissbib.AdvancedSearch.catTreeAutoSend)  swissbib.AdvancedSearch.sendForm(el);
  },

  sendForm: function (el) {
    jQuery(el).parents('form:first').submit();
  },


  /**
   * Check whether current view is advanced search
   *
   * @return    {Boolean}
   */
  isInAdvancedSearch: function () {
    return location.pathname.indexOf('/Advanced') >= 0;
  }

};