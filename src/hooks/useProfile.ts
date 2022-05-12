export default () => {
  const likeProfile = (profileId: number) => {
    console.log('like' + profileId + ' profile')
  }

  const dislikeProfile = (profileId: number) => {
    console.log('dislike' + profileId + ' profile')
  }

  return { likeProfile, dislikeProfile }
}
