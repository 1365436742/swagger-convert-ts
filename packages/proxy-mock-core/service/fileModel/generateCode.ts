import fs from 'fs';
import path from 'path';
import { SapceItem, SpaceConfigJson } from '../types/generatedCode';
import { readJson } from '../utils';
import { createFileDir } from '../utils/file';

export async function getCodeSpaceList(
  generatedCodeFileUrl: string
): Promise<SapceItem[]> {
  const files = await fs.promises.readdir(generatedCodeFileUrl);
  const result: SapceItem[] = [];
  for (let i = 0; i < files.length; i++) {
    const spaceName = files[i];
    const configJsonUrl = path.join(
      generatedCodeFileUrl,
      spaceName,
      'index.json'
    );
    const configJson: SpaceConfigJson = await readJson(configJsonUrl);
    const cur: SapceItem = {
      configJson,
      spaceName,
    };
    result.push(cur)
  }
  return result;
}

export async function updateCodeSpace(
  generatedCodeFileUrl: string,
  options: SapceItem & { oldSpaceName?: string }
) {
  const { oldSpaceName, configJson, spaceName } = options;
  const baseUrl = path.join(generatedCodeFileUrl, spaceName);
  if (oldSpaceName && oldSpaceName !== spaceName) {
    const oldBaseUrl = path.join(generatedCodeFileUrl, oldSpaceName);
    await fs.promises.rename(oldBaseUrl, baseUrl);
  } else {
    await createFileDir(baseUrl);
  }
  const configJsonUrl = path.join(baseUrl, 'index.json');
  const oldConfigJson: SapceItem = await readJson(configJsonUrl, true);
  await fs.promises.writeFile(
    configJsonUrl,
    JSON.stringify(Object.assign(oldConfigJson, configJson), null, 2)
  );
}

export async function deleteCodeSpace(
  generatedCodeFileUrl: string,
  spaceName: string
) {
  const baseUrl = path.join(generatedCodeFileUrl, spaceName);
  await fs.promises.rm(baseUrl, { recursive: true });
}
