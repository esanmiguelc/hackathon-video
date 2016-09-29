export default class CommentRepo {
  constructor() {
    this.comments = {}
  }

  getCommentsForVideoAtTime(videoId, time) {
    var comments = this.comments[videoId] || []
    return comments.filter((comment) => {
      return comment.time <= time
    })
  }

  saveCommentForVideo(videoId, comment) {
    if(this.comments[videoId]) {
      this.comments[videoId].push(comment)
    } else {
      this.comments[videoId] = [comment]
    }
  }
}
