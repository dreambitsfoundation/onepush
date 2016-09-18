/**
 * Created by Gaurav on 18-09-2016.
 */
onepush.controller("pushcheck", function($scope,$http){
    $http({
        method:"GET",
        url:"https://hackerearth.0x10.info/api/one-push?type=json&query=list_websites"
    }).then(function mySuccess(response){
        $scope.total_input=response.data.websites.length;
        var i=0;
        for(i=0; i<response.data.websites.length; i++){
            console.log(response.data.websites[i].title);
        }
        $scope.website=response.data.websites;
        $scope.submition=function(){
            var link="https://hackerearth.0x10.info/api/one-push?type=json&query=push&title={{title}}&url={{linkup}}&tag={{tag}}";
            $http({
                method:"POST",
                url:link
            }).then(function gotSuccess(response){
                if(response.data.status=="403"){
                    $scope.message="Server is busy attending other Users. Please wait for your turn.";
                    $(document).ready(function(){
                        $("#success_window").fadeIn();
                    })
                }else{
                    $scope.message="Congratulation! Your provided information is saved. Your wait time before next submission is atleast 1 Hour.";
                    $("#submit_btn").attr('disabled','disabled');
                    setTimeout(function(){
                        $("#submit_btn").attr('disabled','');
                    },60000);
                }
            })
        }
    })
});
