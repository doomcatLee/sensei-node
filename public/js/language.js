
exports.filterLang = function(language){
    if (language == 'Arabic'){
        return 'ar';
    }else if(language == 'Chinese(Traditional)'){
        return 'zh-TW'
    }else if (language == 'Chinese(Simplified)'){
        return 'zh-CN';
    }else if (language == 'English'){
        return 'en';
    }else if (language == 'French') {
        return 'fr';
    }else if (language == 'German') {
        return 'de';
    }else if (language == 'Italian') {
        return 'it';
    }else if (language == 'Hindi') {
        return 'hi';
    }else if (language == 'Japanese') {
        return 'ja';
    }else if (language == 'Korean') {
        return 'ko';
    }else if (language == 'Russian') {
        return 'ru';
    }else if (language == 'Thai') {
        return 'th';
    }else if (language == 'Vietnamese') {
        return 'vi';
    }else if (language == 'Ukrainian') {
        return 'uk';
    }
};