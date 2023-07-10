import { Options } from '../types/options';

export default function orientationPreviews(wrapper: Element, options: Options) {
    if (!options.orientationPreviews) return;
    if (options.orientationPreviews === 'horizontalBottom') wrapper.classList.add('horizontal-bottom');
    if (options.orientationPreviews === 'horizontalTop') wrapper.classList.add('horizontal-top');
    if (options.orientationPreviews === 'verticalRight') wrapper.classList.add('vertical-right');
}