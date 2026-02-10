export default async function (params = {}) {
  let urlParams = {
    dataSourceId: '5ef2eac3-98df-498a-873f-77bac5d019c0',
    dataSourceType: 'javascript',
    tableName: 'data',
  }
  let data = await fetch(
    `/api/data-source/5ef2eac3-98df-498a-873f-77bac5d019c0/data?${new URLSearchParams(
      urlParams
    )}`,
    {
      method: 'GET',
    }
  )
  const response = await data.json()
  return response
}
