//console.log($);

var input_url = $('.input-url');
var selected_option = $('.select-button');
var cmd_result = '';

var def_qual_param = `-f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/mp4' `;
//credit to u/Veloldo .. https://www.reddit.com/r/DataHoarder/comments/c6fh4x/after_hoarding_over_50k_youtube_videos_here_is/
var best_qual_param = `--download-archive "archive.log" -i --add-metadata --all-subs --embed-subs --embed-thumbnail --match-filter "playlist_title != 'Liked videos' & playlist_title != 'Favorites'" -f "(bestvideo[vcodec^=av01][height>=1080][fps>30]/bestvideo[vcodec=vp9.2][height>=1080][fps>30]/bestvideo[vcodec=vp9][height>=1080][fps>30]/bestvideo[vcodec^=av01][height>=1080]/bestvideo[vcodec=vp9.2][height>=1080]/bestvideo[vcodec=vp9][height>=1080]/bestvideo[height>=1080]/bestvideo[vcodec^=av01][height>=720][fps>30]/bestvideo[vcodec=vp9.2][height>=720][fps>30]/bestvideo[vcodec=vp9][height>=720][fps>30]/bestvideo[vcodec^=av01][height>=720]/bestvideo[vcodec=vp9.2][height>=720]/bestvideo[vcodec=vp9][height>=720]/bestvideo[height>=720]/bestvideo)+(bestaudio[acodec=opus]/bestaudio)/best" --merge-output-format mkv -o "%cd%/%%(playlist_uploader)s/%%(playlist)s/%%(playlist_index)s - %%(title)s - %%(id)s.%%(ext)s" `;
var audio_param = `-f bestaudio[ext=m4a] `;

$('.download-button').click(function() {
    if(!validURL(input_url.val())) {
        console.log("invalid URL");
    }
    else {
        switch(selected_option.val()) {
            case "default":
                console.log("youtube-dl " + def_qual_param + input_url.val());
                break;
            case "best":
                console.log("youtube-dl " + best_qual_param + input_url.val());
                break;
            case "audio":
                console.log("youtube-dl " + audio_param + input_url.val());
                break;
        }
    }

});

//credit to Tom Gullen .. https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url/5717133#5717133
function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }




$('.select-button').click(function() {
    // selected_option
});