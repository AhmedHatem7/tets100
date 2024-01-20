
var inputname=document.getElementById("inputName");
var inputcategory=document.getElementById("inputCategory");
var inputprice=document.getElementById("inputPrice");
var inputdesc=document.getElementById("desc");

var productlist = []  ;
if((localStorage.getItem('prodects'))){
    productlist=JSON.parse(localStorage.getItem("prodects"));
    displayData();
    
}

var addbtn=document.getElementById("addbtn")
var updatebtn=document.getElementById("updatebtn")

function Main()
{
    addprodect()
    clear()
    displayData()
}
function addprodect()
{
    var product ={
 name:inputname.value,
 category:inputcategory.value,
 price:inputprice.value,
 desc:inputdesc.value
    };
    productlist.push(product);
    localStorage.setItem('prodects',JSON.stringify(productlist))
    console.log(productlist)

}
function clear()
 {
    inputname.value=""
    inputcategory.value=""
    inputprice.value=""
    inputdesc.value=""
}
function displayData(){
    var cartona ="";
    for(var i=0;i<productlist.length;i++)
    {
cartona+=`
<tr>
<td>${i}</td>
<td>${productlist[i].name}</td>
<td>${productlist[i].category}</td>
<td>${productlist[i].price}</td>
<td>${productlist[i].desc}</td>
<td> <button onclick="DELETEPRO(${i})" class="btn btn-danger">Delete</button></td>
<td> <button onclick="setdataininput(${i})"class="btn btn-warning">update</button></td>

</tr>
`
    }
    document.getElementById("tbody").innerHTML=cartona;
}
function DELETEPRO(index)
{
    productlist.splice(index,1)
    localStorage.setItem('prodects',JSON.stringify(productlist));
    displayData();

}
var updateindex=0;
function setdataininput(index)
{
    updateindex=index;
    inputname.value=productlist[index].name
    inputcategory.value=productlist[index].category
    inputprice.value=productlist[index].price
    inputdesc.value=productlist[index].desc
 updatebtn.classList.remove("d-none")
 addbtn.classList.add("d-none")
}
function update(index){
    var product ={
        name:inputname.value,
        category:inputcategory.value,
        price:inputprice.value,
        desc:inputdesc.value
           };
           productlist.splice(index,1,product)
           localStorage.setItem('prodects',JSON.stringify(productlist));
           displayData();
           clear();
}
