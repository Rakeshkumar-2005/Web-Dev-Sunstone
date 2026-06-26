// function maggielana(cb){
//   console.log("maggie lene gye...");
//   setTimeout(() =>{
//     console.log("magie aaa.. gya");
//     cb(maggiekhana);  // maggie khana bheje as a function
//   },2000); // representing it take  2 sec to get maggie fromm shop
// }

// function maggiebanana(cb){
//   console.log("maggie banana start");
//   setTimeout(() => {
//     console.log("maggie ban gya..");
//     cb();
//   },2000)
// }


// function maggiekhana(){
//   console.log("maggie khana start");
//   setTimeout(() => {
//     console.log("maggie khana khatam");
//   },2000);
// }
// maggielana(maggiebanana);

// function download(url, cb) {
//     let profileImage = url.split("/")[4];
//     setTimeout(() => {
//         console.log("profileImage");
//         cb(compress);
//     }, 2000)
// }
// function compress(profileImage, cb) {
//     let compressedImage = profileImage.split(".")[0] + ".webp";
//     setTimeout(() => {
//         console.log("compressedImage", compressedImage);
//         cb(upload)
//     }, 2000)
// }
// function upload(compressedImage) {
//     let newurl = 'https://nayawebsite.com/' + compressedImage;
//     setTimeout(() => {
//         console.log(newurl)
//     }, 2000)
// }
// let url = "https://rakeshwebsite.com/image/profile.jpg";
// download(url);

function download(url, cb) {
    let profileImage = url.split("/")[4];

    setTimeout(() => {
        console.log(profileImage);
        cb(profileImage, upload);
    }, 2000);
}

function compress(profileImage, cb) {
    let compressedImage = profileImage.split(".")[0] + ".webp";

    setTimeout(() => {
        console.log(compressedImage);
        cb(compressedImage);
    }, 2000);
}

function upload(compressedImage) {
    let newurl = "https://nayawebsite.com/" + compressedImage;

    setTimeout(() => {
        console.log(newurl);
    }, 2000);
}

let url = "https://rakeshwebsite.com/image/profile.jpg";

download(url, compress);





