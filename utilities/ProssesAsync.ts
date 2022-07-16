import { Ref } from "vue";

export async function ProssesAsync<T>(
  fn: () => Promise<any>,
  isLoading: Ref<boolean>
): Promise<T> {
  isLoading.value = true;
  var result = await fn();
  isLoading.value = false;
  return result;
}
