$(document).ready(function() {
            $(".button-collapse").sideNav();
            $('select').material_select();

            // $("#yourPolls").click(function() {
            var doc;
            $("#submit").click(function() {
                alert("Hi");
                doc = document.getElementById("search").value;
                // alert(doc);
                searchBook();
            });

            // function genDivs() {
            //     // var e = document.body; // whatever you want to append the rows to: 
            //     var allCells = document.getElementById("code");
            //     for (var i = 0; i < 10; i++) {
            //         var row = document.createElement("div");
            //         row.className = "row";
            //         for (var x = 1; x <= 4; x++) {
            //             var cell = document.createElement("div");
            //             cell.className = "col l3 m3 s3 allDivs";
            //             cell.innerHTML = '<img src="../image.png" style="width:130px; height:inherit">';
            //             // cell.innerHTML = (i * 10) + x;
            //             row.appendChild(cell);
            //         }
            //         allCells.appendChild(row);
            //     }
            //     document.getElementById("code").innerHTML = allCells.innerHTML;
            // }

            function searchBook() {
                var xhttp;
                var yourData;
                var your_poll_list = [];
                var cell3;
                xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (xhttp.readyState == 4 && xhttp.status == 200) {
                        yourData = JSON.parse(xhttp.responseText);
                        console.log(yourData.items.length);
                        var i;
                        var tabl = document.getElementById("your_poll_list");
                        $('#your_poll_list tr').html(''); // clear the table for other item
                        var title, ids, image = [],
                            preview;
                        for (i = 0; i < yourData.items.length; i++) {
                            ids = yourData.items[i].id;
                            image.push(yourData.items[i].volumeInfo.imageLinks.smallThumbnail);
                            title = yourData.items[i].volumeInfo.title;
                            preview = yourData.items[i].volumeInfo.previewLink;

                            var row = tabl.insertRow();
                            row.id = ids; // give "id" to each poll, and the id is the "poll_id" from the database
                            row.className = "trs"; // give the all option rows the class "trs"

                            var cell1 = row.insertCell();
                            cell1.innerHTML = title;

                            cell3 = row.insertCell();
                            // cell3.innerHTML = '<img>'

                            for (var k = 0; k < image.length; k++) {
                                cell3.innerHTML = '<img>';
                                $("img").attr("src", image[k]);
                            }


                            // image = document.getElementById('imgDisp');
                            // image.src = imgName;
                            // '<a href="test.html">' + imgEl + '</a>'

                            // console.log(image[i]);
                            console.log(preview);
                            // console.log(img);
                            // console.log(typeof(img));
                            // console.log("==============================================");

                            // $("#imgs img").attr("src", image);
                            // var link = document.getElementById(ids);
                            // var img = $("img").attr("src", image);
                            // $("#imgs img").attr("src", image);
                            // image = document.getElementById('imgDisp');
                            // image.src = imgName;
                            // '<a href="test.html">' + imgEl + '</a>'


                            // var allCells = document.getElementById("code");
                            // for (var d = 0; d < 10; d++) {
                            //     var row = document.createElement("div");
                            //     row.className = "row";
                            //     for (var x = 1; x <= 4; x++) {
                            //         var cell = document.createElement("div");
                            //         cell.className = "col l3 m3 s3 allDivs";
                            //         cell.innerHTML = '<img style="width:130px; height:inherit">';
                            //         // cell.innerHTML = (i * 10) + x;
                            //         row.appendChild(cell);
                            //     }
                            //     allCells.appendChild(row);
                            // }
                            // document.getElementById("code").innerHTML = allCells.innerHTML;
                        }

                        // console.log(image.length);
                        // console.log(image);
                        // console.log(image[i]);
                        // console.log(img);
                        // console.log(img[i]);

                        // var allCells = document.getElementById("code");
                        //     for (var d = 0; d < 10; d++) {
                        //         var row = document.createElement("div");
                        //         row.className = "row";
                        //         for (var x = 1; x <= 4; x++) {
                        //             var cell = document.createElement("div");
                        //             cell.className = "col l3 m3 s3 allDivs";
                        //             cell.innerHTML = '<img style="width:130px; height:inherit">';
                        //             // cell.innerHTML = (i * 10) + x;
                        //             row.appendChild(cell);
                        //         }
                        //         allCells.appendChild(row);
                        //     }
                        //     document.getElementById("code").innerHTML = allCells.innerHTML;
                        // var img = $("img").attr("src", image);
                    };
                };
                xhttp.open("GET", "https://www.googleapis.com/books/v1/volumes?q=" + doc + "&key=AIzaSyAEBAidZyJuBnD8Oc2VWbYN8dxJBJaqxCA", true);
                xhttp.send(xhttp.responseText);
                // });
            }

        }





        // api call to google book
        // https://www.googleapis.com/books/v1/volumes?q=trumpet&key=AIzaSyAEBAidZyJuBnD8Oc2VWbYN8dxJBJaqxCA