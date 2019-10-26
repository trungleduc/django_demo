
$(document).ready(function () { 

  $('#plot_btn').click(function(){
    var data_size = $('#data_size_input').val()
    if (data_size.length == 0) {
      data_size = 10
    } 
    data = {'data_size': data_size}
    //delete on server 
    $.ajax({
      type: 'GET',
      url: '/ajax/plot_data', 
      data: data,
      success: function (data) {
        array = data["array"]
        label = data["label"]
        var plot_data = [
          {
            x: label,
            y: array,
            type: 'bar'
          }
        ];
        
        Plotly.newPlot('plot_area', plot_data);
      }
    })
        
  })
})