import emojiList from "../emoji_list.json";

const filterEmoji = (searchText, maxResults) => {
  return emojiList
    .filter((emoji) => {
      if (
        emoji.title.toLowerCase().startsWith(searchText.toLowerCase()) ||
        emoji.keywords.startsWith(searchText)
      ) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
};
export default filterEmoji;
