
import * as types from '../constants/ActionTypes';
//请求文章列表数据  是否要刷新，以及加载更多
export function requestArticleList(
  isRefreshing,
  loading,
  typeId,
  isLoadMore,
  page = 1
) {
  return {
    type: types.REQUEST_ARTICLE_LIST,
    isRefreshing,
    loading,
    isLoadMore,
    typeId,
    page
  };
}
//获取文章列表
export function fetchArticleList(isRefreshing, loading, isLoadMore = false) {
  return {
    type: types.FETCH_ARTICLE_LIST,
    isRefreshing,
    loading,
    isLoadMore
  };
}

export function receiveArticleList(articleList, typeId) {
  return {
    type: types.RECEIVE_ARTICLE_LIST,
    articleList,
    typeId
  };
}
