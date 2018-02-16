import slug from "slug";
import moment from "moment";

export default (entryDate, subject) => `${moment(entryDate).format("YYYY-MM-DD")}-${slug(subject.toLowerCase())}`;