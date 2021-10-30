<!DOCTYPE html>
<html>
<body>

 

<button onclick="MyRandom();">کلیک کنید</button>
<h2 id="Result"></h2>

<script>

function MyRandom(){
 var Daneshjoo = ["سلام", "خوبی", "منم", "امیر" , "خداحافظ" , "ههه"];
 var RandomString = Math.floor(Math.random() * Daneshjoo.length);
 var result = document.getElementById("Result");
 result.innerHTML = Daneshjoo[RandomString];
}

</script>

</body>
</html>
