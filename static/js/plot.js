$(document).ready(function () {
  const country_list = ["Afghanistan", "Albania", "Algeria", "Andorra", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia-Australian Capital Territory", 
  "Australia-From Diamond Princess", "Australia-New South Wales", "Australia-Northern Territory", "Australia-Queensland", "Australia-South Australia", "Australia-Tasmania", "Australia-Victoria", "Australia-Western Australia", "Austria", "Azerbaijan", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Cambodia", "Cameroon", "Canada-Alberta", "Canada-British Columbia", "Canada-Grand Princess", "Canada-Manitoba", "Canada-New Brunswick", "Canada-Newfoundland and Labrador", "Canada-Nova Scotia", "Canada-Ontario", "Canada-Prince Edward Island", "Canada-Quebec", "Canada-Saskatchewan", "Central African Republic", "Chile", "China-Anhui", "China-Beijing", "China-Chongqing", "China-Fujian", "China-Gansu", "China-Guangdong", "China-Guangxi", "China-Guizhou", "China-Hainan", "China-Hebei", "China-Heilongjiang", "China-Henan", "China-Hong Kong", "China-Hubei", "China-Hunan", "China-Inner Mongolia", "China-Jiangsu", "China-Jiangxi", "China-Jilin", "China-Liaoning", "China-Macau", "China-Ningxia", "China-Qinghai", "China-Shaanxi", "China-Shandong", "China-Shanghai", "China-Shanxi", "China-Sichuan", "China-Tianjin", "China-Tibet", "China-Xinjiang", "China-Yunnan", "China-Zhejiang", "Colombia", "Congo (Brazzaville)", "Congo (Kinshasa)", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cruise Ship-Diamond Princess", "Cuba", "Cyprus", "Czechia", "Denmark-Denmark", "Denmark-Faroe Islands", "Dominican Republic", "Ecuador", "Egypt", "Equatorial Guinea", "Estonia", "Eswatini", "Ethiopia", "Finland", "France-France", "France-French Guiana", "France-French Polynesia", "France-Guadeloupe", "France-Mayotte", "France-Reunion", "France-Saint Barthelemy", "France-St Martin", "Gabon", "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Guatemala", "Guernsey", "Guinea", "Guyana", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Korea, South", "Kosovo", "Kuwait", "Latvia", "Lebanon", "Liberia", "Liechtenstein", "Lithuania", "Luxembourg", "Malaysia", "Maldives", "Malta", "Martinique", "Mauritania", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Namibia", "Nepal", "Netherlands-Curacao", "Netherlands-Netherlands", "New Zealand", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Panama", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Lucia", "Saint Vincent and the Grenadines", "San Marino", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Singapore", "Slovakia", "Slovenia", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Taiwan*", "Tanzania", "Thailand", "The Bahamas", "The Gambia", "Togo", "Trinidad and Tobago", "Tunisia", "Turkey", "US-Adams, IN", "US-Alabama", "US-Alachua, FL", "US-Alameda County, CA", "US-Alaska", "US-Anoka, MN", "US-Arapahoe, CO", "US-Arizona", "US-Arkansas", "US-Arlington, VA", "US-Beadle, SD", "US-Bennington County, VT", "US-Bergen County, NJ", "US-Berkshire County, MA", "US-Bernalillo, NM", "US-Bon Homme, SD", "US-Boone, IN", "US-Broward County, FL", "US-Bucks, PA", "US-Burlington, NJ", "US-Calaveras, CA", "US-California", "US-Camden, NC", "US-Camden, NJ", "US-Carver County, MN", "US-Charles Mix, SD", "US-Charleston County, SC", "US-Charlotte County, FL", "US-Charlton, GA", "US-Chatham County, NC", "US-Cherokee County, GA", "US-Clark County, NV", "US-Clark County, WA", "US-Cobb County, GA", "US-Collier, FL", "US-Collin County, TX", "US-Colorado", "US-Connecticut", "US-Contra Costa County, CA", "US-Cook County, IL", "US-Cuyahoga, OH", "US-Dallas, TX", "US-Dane, WI", "US-Davidson County, TN", "US-Davis County, UT", "US-Davison, SD", "US-DeKalb, GA", "US-Delaware", "US-Delaware County, PA", "US-Denver County, CO", "US-Deschutes, OR", "US-Diamond Princess", "US-District of Columbia", "US-Douglas County, CO", "US-Douglas County, NE", "US-Douglas County, OR", "US-Eagle, CO", "US-El Paso County, CO", "US-Essex, MA", "US-Fairfax County, VA", "US-Fairfield, CT", "US-Fayette County, KY", "US-Fayette, GA", "US-Florida", "US-Floyd, GA", "US-Fort Bend County, TX", "US-Fresno County, CA", "US-Fulton County, GA", "US-Georgia", "US-Grafton County, NH", "US-Grand Princess", "US-Grant County, WA", "US-Gregg, TX", "US-Guam", "US-Gunnison, CO", "US-Gwinnett, GA", "US-Hanover, VA", "US-Harford County, MD", "US-Harris County, TX", "US-Harrison County, KY", "US-Hawaii", "US-Hendricks County, IN", "US-Hillsborough, FL", "US-Honolulu County, HI", "US-Howard, IN", "US-Hudson County, NJ", "US-Humboldt County, CA", "US-Idaho", "US-Illinois", "US-Indiana", "US-Iowa", "US-Island, WA", "US-Jackson County, OR ", "US-Jefferson County,KY", "US-Jefferson County, WA", "US-Jefferson Parish, LA", "US-Jefferson, CO", "US-Johnson County, IA", "US-Johnson County, KS", "US-Johnson, IN","US-Kane, IL", "US-Kansas", "US-Kentucky", "US-Kershaw County, SC", "US-King County, WA", "US-Kitsap, WA", "US-Kittitas County, WA", "US-Klamath County, OR", "US-Knox, NE", "US-Lake, IL", "US-Lancaster, SC", "US-Larimer, CO", "US-Lee County, FL", "US-Litchfield, CT", "US-Los Angeles, CA", "US-Loudoun, VA", "US-Louisiana", "US-Madera County, CA", "US-Maine", "US-Manatee County, FL", "US-Maricopa County, AZ", "US-Marin, CA", "US-Marion County, IN", "US-Marion County, OR", "US-Maryland", "US-Massachusetts", "US-McHenry, IL", "US-Michigan", "US-Middlesex County, MA", "US-Middlesex, NJ", "US-Minnehaha, SD", "US-Minnesota", "US-Mississippi", "US-Missouri", "US-Monmouth, NJ", "US-Monroe, PA", "US-Montana", "US-Montgomery County, MD", "US-Montgomery County, PA", "US-Montgomery, TX", "US-Multnomah, OR", "US-Napa, CA", "US-Nassau County, NY", "US-Nassau, FL", "US-Nebraska", "US-Nevada", "US-New Castle, DE", "US-New Hampshire", "US-New Jersey", "US-New Mexico", "US-New York", "US-New York County, NY", "US-Noble, IN", "US-Norfolk County, MA", "US-Norfolk, VA", "US-North Carolina", "US-North Dakota", "US-Oakland, MI", "US-Ohio", "US-Okaloosa County, FL", "US-Oklahoma", "US-Olmsted, MN", "US-Orange County, CA", "US-Oregon", "US-Orleans, LA", "US-Pasco, FL", "US-Passaic, NJ", "US-Pennington, SD", "US-Pennsylvania", "US-Philadelphia, PA", "US-Pierce County, WA", "US-Pierce, WI", "US-Pima, AZ", "US-Pinal County, AZ", "US-Pinellas, FL", "US-Placer County, CA", "US-Polk County, GA", "US-Polk, OR", "US-Pottawattamie, IA", "US-Prince George's, MD", "US-Providence County, RI", "US-Puerto Rico", "US-Ramsey County, MN", "US-Rhode Island", "US-Riverside County, CA", "US-Rockingham County, NH", "US-Rockland County, NY", "US-Sacramento County, CA", "US-San Benito, CA", "US-San Diego County, CA", "US-San Francisco County, CA", "US-San Joaquin, CA", "US-San Mateo, CA", "US-Santa Clara County, CA", "US-Santa Cruz, CA", "US-Santa Rosa County, FL", "US-Saratoga County, NY", "US-Shasta County, CA", "US-Shelby County, TN", "US-Skagit, WA", "US-Snohomish County, WA", "US-Socorro, NM", "US-Solano, CA", "US-Sonoma County, CA", "US-South Carolina", "US-South Dakota", "US-Spartanburg County, SC", "US-Spotsylvania, VA", "US-St. Joseph, IN", "US-St. Louis County, MO", "US-Stanislaus, CA", "US-Stark, OH", "US-Suffolk County, MA", "US-Suffolk County, NY", "US-Sullivan, TN", "US-Summit County, CO", "US-Summit, UT", "US-Tarrant, TX", "US-Tennessee", "US-Texas", "US-Thurston, WA", "US-Tulsa County, OK", "US-Ulster County, NY", "US-Umatilla, OR", "US-Union, NJ", "US-Utah", "US-Ventura, CA", "US-Vermont", "US-Virgin Islands", "US-Virginia", "US-Volusia County, FL", "US-Wake County, NC", "US-Washington", "US-Washington County, OR", "US-Washington, D.C.", "US-Washoe County, NV", "US-Wayne County, PA", "US-Wayne, MI", "US-Weber, UT", "US-West Virginia", "US-Westchester County, NY", "US-Whatcom, WA", "US-Williamson County, TN", "US-Wisconsin", "US-Worcester, MA", "US-Wyoming", "US-Yolo County, CA", "Ukraine", "United Arab Emirates", "United Kingdom-Cayman Islands", "United Kingdom-Channel Islands", "United Kingdom-Gibraltar", "United Kingdom-United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam"];

  country_list.forEach(value => {
    $("#country_select").append(
      $("<option>", {
        value: value,
        text: value
      })
    );
  });

  $("#plot_btn").click(function () {
    const country = $("#country_select").val();
    data = {
      country: country
    };
    //delete on server
    $.ajax({
      type: "GET",
      url: "/ajax/plot_data",
      data: data,
      success: function (data) {
        console.log(data);

        data_array = data["data"];
        data_x_array = Array.from(Array(data_array.length).keys());
        predict_array = data["predict_data"]

        label_array = data["date_array"]

        var plot_data = [{
            y: data_array,
            mode: "markers",
            type: "scatter",
            name: "Confirmed",
          },
          {
            x: label_array,
            y: predict_array,
            mode: "lines",
            type: "scatter",
            name: "Predicted",
          }
        ];

        Plotly.newPlot("plot_area", plot_data);
      }
    });
  });
});