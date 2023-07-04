import { Options } from '../types/options';

export default function orientationPreviews(wrapper: Element, options: Options) {
    if (!options.orientationPreviews) return;
    if (options.orientationPreviews === 'horizontallyBottom') wrapper.classList.add('horizontally-bottom');
    if (options.orientationPreviews === 'horizontallyTop') wrapper.classList.add('horizontally-top');
    if (options.orientationPreviews === 'verticalRight') wrapper.classList.add('vertical-right');
}