var bubu ={ s64:"13",s65:"27",s11:"20",s12:"8",s13:"34",s14:"46",s15:"196",s21:"95",s22:"34",s23:"190",s31:"4",s32:"30",s33:"31",s34:"102",s35:"92",s36:"174",s37:"75",s41:"35",s42:"63",s43:"95",s44:"371",s45:"76",s46:"68",s50:"51",s51:"164",s52:"129",s53:"152",s54:"45",s61:"50",s62:"57",s63:"11" };
var title = "2008年各地区自然保护区个数";
var unit = "个";
function getColor(d) {
    return d > 190 ? '#800026' :
           d > 130  ? '#BD0026' :
           d > 90  ? '#E31A1C' :
           d > 70  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 35  ? '#FEB24C' :
           d > 20   ? '#FED976' :
           d > 1   ? '#FFEDA0' :
           d < 0   ? '#000000' :
                      '#000000';
}
var vgrades = [1, 20, 35, 50, 70, 90, 130, 190];