import { useId } from '@react-aria/utils';
import type { FC } from 'react';

import type { SvgProps } from './types';

export const NetIcon: FC<SvgProps> = ({
  height = '100%',
  id,
  title = 'Net',
  width = '100%',
  ...props
}) => {
  const titleId = useId(id);

  return (
    <svg
      aria-labelledby={titleId}
      height={height}
      role="img"
      viewBox="0 0 50 50"
      width={width}
      {...props}
    >
      <title id={titleId}>{title}</title>
      <defs>
        <linearGradient
          x1="49.997%"
          y1="-19.516%"
          x2="49.997%"
          y2="129.625%"
          id="a"
        >
          <stop stopColor="#ECF0F4" offset="0%" />
          <stop stopColor="#ECF0F4" offset="35.001%" />
          <stop stopColor="#ECF0F4" offset="35.001%" />
          <stop stopColor="#ECF0F4" offset="84.616%" />
          <stop stopColor="#ECF0F4" offset="84.616%" />
          <stop stopColor="#ECF0F4" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50.001%"
          y1="-19.516%"
          x2="50.001%"
          y2="129.624%"
          id="b"
        >
          <stop stopColor="#ECF0F4" offset="0%" />
          <stop stopColor="#ECF0F4" offset="36%" />
          <stop stopColor="#ECF0F4" offset="36%" />
          <stop stopColor="#ECF0F4" offset="84.616%" />
          <stop stopColor="#ECF0F4" offset="84.616%" />
          <stop stopColor="#ECF0F4" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="49.999%"
          y1="110.922%"
          x2="49.999%"
          y2="-6.214%"
          id="c"
        >
          <stop stopColor="#ECF0F4" offset="0%" />
          <stop stopColor="#ECF0F4" offset="50%" />
          <stop stopColor="#ECF0F4" stopOpacity=".42" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50.001%"
          y1="-19.515%"
          x2="50.001%"
          y2="129.627%"
          id="d"
        >
          <stop stopColor="#ECF0F4" offset="0%" />
          <stop stopColor="#ECF0F4" offset="39.999%" />
          <stop stopColor="#ECF0F4" offset="39.999%" />
          <stop stopColor="#ECF0F4" offset="84.616%" />
          <stop stopColor="#ECF0F4" offset="84.616%" />
          <stop stopColor="#ECF0F4" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="49.999%"
          y1="-19.521%"
          x2="49.999%"
          y2="129.627%"
          id="e"
        >
          <stop stopColor="#ECF0F4" offset="0%" />
          <stop stopColor="#ECF0F4" offset="39%" />
          <stop stopColor="#ECF0F4" offset="39%" />
          <stop stopColor="#ECF0F4" offset="78.023%" />
          <stop stopColor="#ECF0F4" offset="78.023%" />
          <stop stopColor="#ECF0F4" offset="100%" />
        </linearGradient>
        <linearGradient x1="0%" y1="50.001%" x2="100%" y2="50.001%" id="f">
          <stop stopColor="#ECF0F4" stopOpacity=".698" offset="0%" />
          <stop stopColor="#ECF0F4" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50.01%"
          y1="94.686%"
          x2="50.01%"
          y2="-3.025%"
          id="g"
        >
          <stop stopColor="#ECF0F4" offset="0%" />
          <stop stopColor="#ECF0F4" stopOpacity=".549" offset="60%" />
          <stop stopColor="#ECF0F4" stopOpacity=".235" offset="100%" />
        </linearGradient>
        <linearGradient x1="-.001%" y1="50%" x2="99.999%" y2="50%" id="h">
          <stop stopColor="#ECF0F4" stopOpacity=".247" offset="0%" />
          <stop stopColor="#ECF0F4" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="49.998%"
          y1="124.314%"
          x2="49.998%"
          y2="-9.421%"
          id="i"
        >
          <stop stopColor="#ECF0F4" offset="0%" />
          <stop stopColor="#ECF0F4" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="49.999%"
          y1="91.2%"
          x2="49.999%"
          y2="-76.785%"
          id="j"
        >
          <stop stopColor="#ECF0F4" offset="0%" />
          <stop stopColor="#ECF0F4" stopOpacity=".549" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="100.01%" x2="50%" y2=".01%" id="k">
          <stop stopColor="#ECF0F4" offset="0%" />
          <stop stopColor="#ECF0F4" offset="50%" />
          <stop stopColor="#ECF0F4" offset="50%" />
          <stop stopColor="#ECF0F4" offset="91.759%" />
          <stop stopColor="#ECF0F4" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="59.804%"
          y1="94.568%"
          x2="38.471%"
          y2="5.755%"
          id="l"
        >
          <stop stopColor="#ECF0F4" offset="0%" />
          <stop stopColor="#ECF0F4" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="49.995%"
          y1="76.998%"
          x2="49.995%"
          y2="-3.299%"
          id="m"
        >
          <stop stopColor="#ECF0F4" offset="0%" />
          <stop stopColor="#ECF0F4" offset="87.363%" />
          <stop stopColor="#ECF0F4" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="65.263%"
          y1="-4.161%"
          x2="34.263%"
          y2="105.844%"
          id="n"
        >
          <stop stopColor="#ECF0F4" stopOpacity=".329" offset="0%" />
          <stop stopColor="#ECF0F4" offset="96.153%" />
          <stop stopColor="#ECF0F4" offset="96.153%" />
          <stop stopColor="#ECF0F4" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50.017%"
          y1="-.296%"
          x2="50.017%"
          y2="101.882%"
          id="o"
        >
          <stop stopColor="#ECF0F4" offset="0%" />
          <stop stopColor="#ECF0F4" offset="50%" />
          <stop stopColor="#ECF0F4" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="16.674%"
          y1="205.565%"
          x2="87.813%"
          y2="-19.836%"
          id="p"
        >
          <stop stopColor="#ECF0F4" offset="0%" />
          <stop stopColor="#ECF0F4" offset="70.329%" />
          <stop stopColor="#ECF0F4" offset="100%" />
        </linearGradient>
        <linearGradient x1="6.89%" y1="6.3%" x2="75.783%" y2="116.771%" id="q">
          <stop stopColor="#ECF0F4" offset="0%" />
          <stop stopColor="#ECF0F4" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="49.997%"
          y1="6.363%"
          x2="49.997%"
          y2="127.961%"
          id="r"
        >
          <stop stopColor="#ECF0F4" offset="0%" />
          <stop stopColor="#ECF0F4" stopOpacity="0" offset="100%" />
        </linearGradient>
      </defs>
      <g fillRule="nonzero" fill="none">
        <path
          d="M88.323 20.689c9.165 28.026 12.637 78.022 39.436 78.022 2.04 0 4.102-.2 6.172-.594-24.362-5.68-27.25-55.132-42.116-80.741a123.34 123.34 0 0 0-3.492 3.313"
          fill="url(#a)"
          transform="translate(.987)"
        />
        <path
          d="M91.815 17.376c14.866 25.609 17.754 75.061 42.116 80.741 1.913-.351 3.831-.883 5.754-1.554C117.817 85.85 111.773 37.828 94.89 14.71a105.202 105.202 0 0 0-3.076 2.667"
          fill="url(#b)"
          transform="translate(.987)"
        />
        <path
          d="M114.221 2.145c-2.036 0-4.102.2-6.175.594-5.423 1.022-10.931 3.357-16.485 6.89 1.517 1.497 2.96 3.21 4.318 5.08 5.648-4.687 11.26-8.15 16.85-10.232a37.568 37.568 0 0 1 6.285-1.747 19.364 19.364 0 0 0-4.793-.585"
          fill="#ECF0F4"
        />
        <path
          d="M156.755 86.687a98.185 98.185 0 0 0 6.723-5.893c-9.312-27.896-12.645-78.607-39.633-78.607-1.93 0-3.877.18-5.82.54 24.584 6.114 27.733 59.598 38.73 83.96"
          fill="url(#c)"
          transform="translate(.987)"
        />
        <path
          d="M119.013 2.728a19.382 19.382 0 0 0-4.793-.584l10.613.039c-1.93 0-3.877.18-5.82.544M157.27 92.613c-1.055-1.006-2.057-2.11-3.043-3.288-4.54 3.214-9.062 5.652-13.556 7.238a20.881 20.881 0 0 0 5.054 1.722 21.42 21.42 0 0 0 4.307.426c5.042 0 9.03-.597 12.424-2.225-1.869-1.01-3.583-2.32-5.186-3.873"
          fill="#ECF0F4"
        />
        <path
          d="M111.74 4.481c22.019 11.516 23.933 63.668 41.502 84.844a74.585 74.585 0 0 0 3.509-2.638c-10.997-24.362-14.142-77.85-38.721-83.96a38.06 38.06 0 0 0-6.29 1.754"
          fill="url(#d)"
          transform="translate(.987)"
        />
        <path
          d="M94.89 14.71c16.883 23.118 22.927 71.139 44.795 81.853 4.494-1.586 9.017-4.024 13.557-7.238-17.57-21.176-19.483-73.328-41.502-84.844-5.59 2.078-11.201 5.541-16.85 10.228"
          fill="url(#e)"
          transform="translate(.987)"
        />
        <path
          d="M77.522 20.014c-2.646 5.983-5.35 13.847-8.617 24.112C75.403 34.97 81.88 27.08 88.322 20.69c-.887-2.728-1.84-5.243-2.866-7.485a96.763 96.763 0 0 0-7.934 6.81"
          fill="url(#f)"
          transform="translate(.987)"
        />
        <path
          d="M88.789 11.479a90.096 90.096 0 0 0-2.344 1.726c1.027 2.241 1.976 4.756 2.863 7.484a135.88 135.88 0 0 1 3.492-3.313c-1.247-2.143-2.572-4.122-4.011-5.897"
          fill="#ECF0F4"
        />
        <path
          d="M91.56 9.63a76.239 76.239 0 0 0-2.772 1.848c1.44 1.775 2.765 3.754 4.016 5.901a93.62 93.62 0 0 1 3.076-2.67c-1.358-1.869-2.802-3.583-4.32-5.08"
          fill="#ECF0F4"
        />
        <path
          d="M240.76.011c-12.453 48.025-38.463 86.598-60.269 96.323h-.041c-.397.18-.79.344-1.178.503-.054.033-.102.037-.143.056-.115.046-.221.082-.336.128-.053.032-.102.043-.15.062-.185.066-.365.121-.545.193-.078.033-.151.053-.225.079a2.734 2.734 0 0 1-.27.088c-.082.032-.167.056-.262.092-.077.032-.16.046-.233.078-.16.046-.306.085-.466.14-.065 0-.126.036-.196.054-.098.032-.209.055-.315.085-.074.032-.135.043-.213.059-.11.032-.233.062-.343.088l-.417.092a8.879 8.879 0 0 0 3.12.548c20.677 0 41.526-37.056 76.022-98.679h-13.545l.005.011z"
          fill="url(#g)"
          transform="translate(.987)"
        />
        <path
          d="M64.414 4.094c.013 0 .03-.032.038-.032.016 0 .041 0 .05-.032h.025c.115-.04.22-.085.335-.128.03 0 .045 0 .066-.032.03 0 .057-.033.086-.037.123-.039.245-.085.36-.127h.02c.274-.082.527-.184.793-.279.037 0 .073-.032.118-.032.11-.036.225-.075.34-.101.053-.033.106-.033.155-.05.118-.035.233-.075.344-.101.049 0 .094-.033.13-.036.38-.105.757-.203 1.137-.294.054 0 .099-.033.156-.036.11-.032.212-.05.331-.066.05-.032.106-.032.164-.049.11-.032.216-.036.335-.062h.078c.229-.047.462-.085.69-.128h.14c.11-.032.208-.036.319-.056.06 0 .123-.032.18-.032.102 0 .204-.033.306-.046.054 0 .107 0 .168-.033.241-.032.491-.045.745-.065a22.972 22.972 0 0 0-2.2-.115c-23.287 0-55.37 43.207-69.823 99.161h2.785c4.625-8.248 8.78-16.051 12.58-23.376 10.122-39.633 30.737-66.661 49.05-73.822"
          fill="url(#h)"
          transform="translate(.987)"
        />
        <path
          d="M78.509 20.014a96.72 96.72 0 0 1 7.934-6.81 37.464 37.464 0 0 0-1.89-3.652c-2.13 2.585-4.077 5.996-6.044 10.462"
          fill="#ECF0F4"
        />
        <path
          d="M80.422 4.422c1.521 1.276 2.883 3.03 4.13 5.133.393-.483.79-.929 1.203-1.346-1.73-1.615-3.6-2.94-5.628-3.938.082.045.164.082.249.118 0 0 .032.032.046.032"
          fill="#ECF0F4"
        />
        <path
          d="M15.364 77.915c21.233-40.917 31.294-66.813 49.05-73.823-18.308 7.166-38.928 34.194-49.05 73.823"
          fill="url(#i)"
          transform="translate(.987)"
        />
        <path
          d="M85.753 8.208c-.413.421-.805.863-1.202 1.346a37.992 37.992 0 0 1 1.894 3.651 90.096 90.096 0 0 1 2.343-1.725 31.882 31.882 0 0 0-3.035-3.272"
          fill="#ECF0F4"
        />
        <path
          d="M25.003 101.107c-.13.033-.262.033-.384.046h-.074c-.11 0-.225.033-.327.033h-.054c-.265.032-.527.032-.78.052h-.082c21.49-.601 31.314-11.361 36.189-26.967 3.705-11.831 6.748-21.798 9.414-30.161-9.001 12.67-18.043 27.773-27.135 44.692-4.384 8.154-11.05 11.56-16.767 12.29"
          fill="url(#j)"
          transform="translate(.987)"
        />
        <path
          d="M25.003 101.099c5.717-.728 12.383-4.13 16.768-12.29 9.09-16.914 18.137-32.021 27.13-44.691 3.272-10.27 5.971-18.13 8.621-24.113-17.925 17.062-35.92 45.432-52.519 81.086"
          fill="url(#k)"
          transform="translate(.987)"
        />
        <path
          d="M16.35 77.916c-3.8 7.324-7.955 15.127-12.58 23.376h8.101A198.004 198.004 0 0 1 16.35 77.92"
          fill="#ECF0F4"
        />
        <path
          d="M71.277 2.326c-.065 0-.114.032-.171.032-.099.033-.201.033-.303.043-.06 0-.119 0-.18.033-.11.032-.213.035-.32.056-.049 0-.097 0-.138.032-.233.039-.462.082-.691.121h-.078c-.119.033-.225.05-.335.066-.058.032-.115.032-.168.045-.11.033-.221.046-.327.066-.058.032-.102.032-.156.035-.38.092-.756.19-1.137.295-.04 0-.082.032-.13.039-.115.032-.226.065-.344.101-.05.033-.106.033-.156.046a9.466 9.466 0 0 0-.339.101c-.045 0-.082.032-.123.032-.261.098-.519.197-.789.278-.114.036-.237.082-.36.125-.05.032-.094.04-.151.062-.115.036-.229.082-.335.124-.04.033-.082.036-.11.053-17.758 7.01-27.818 32.905-49.052 73.822a197.146 197.146 0 0 0-4.478 23.373h1.137c3.202 0 4.106-.033 7.79-.033H23.405c.254-.032.515-.032.781-.053h.05c.11 0 .22-.032.326-.032h.078c.118 0 .254-.032.384-.046 16.6-35.654 34.595-64.024 52.52-81.086 1.97-4.465 3.913-7.876 6.04-10.457-1.243-2.102-2.605-3.86-4.127-5.136 0 0-.04 0-.044-.033-.086-.035-.168-.078-.254-.12-.086-.047-.16-.083-.249-.128a2.707 2.707 0 0 1-.245-.118c-.107-.033-.193-.079-.287-.121-.077-.033-.147-.066-.225-.098a9.571 9.571 0 0 1-.47-.197c-.07-.032-.135-.05-.2-.075a6.68 6.68 0 0 1-.352-.14c-.058-.033-.123-.04-.188-.063-.168-.056-.332-.115-.487-.167h-.04c-.189-.062-.373-.108-.565-.16-.045-.033-.082-.033-.127-.04-.167-.045-.315-.09-.474-.133-.04 0-.078-.033-.11-.033a16.794 16.794 0 0 0-1.182-.258c-.041 0-.082-.033-.123-.033a6.982 6.982 0 0 0-.511-.082c-.041-.032-.066-.032-.102-.032a13.62 13.62 0 0 0-.605-.079h-.107c-.163-.032-.314-.035-.466-.052-.258.032-.503.046-.744.069"
          fill="url(#l)"
          transform="translate(.987)"
        />
        <path
          d="M192.118 26.598c-4.086 13.087-7.394 23.883-10.273 32.766 11.21-15.426 22.251-34.832 32.766-57.226-12.265 3.852-18.808 12.67-22.493 24.46"
          fill="url(#m)"
          transform="translate(.987)"
        />
        <path
          d="M182.2 95.516c-.572.292-1.145.569-1.709.818 21.806-9.725 47.816-48.298 60.27-96.323h-2.524C209.626 51.12 200.424 85.333 182.2 95.516"
          fill="url(#n)"
          transform="translate(.987)"
        />
        <path
          d="M168.948 91.223c4.744-5.791 8.609-15.635 13.885-31.859-6.086 8.36-12.212 15.545-18.343 21.406 0 .032 0 .032-.032.052 1.338 4.008 2.806 7.545 4.478 10.4M168.948 91.223c-1.615 1.97-3.325 3.472-5.226 4.584-.418.242-.839.47-1.268.68a18.375 18.375 0 0 0 6.653 2.097c.36.036.716.069 1.088.095h.066c.167 0 .344 0 .524.032H172.559c.065 0 .133 0 .199-.032.127 0 .262 0 .392-.033h.194c.134 0 .281-.032.425-.046h.033c.042 0 .088-.032.13-.032.15-.033.308-.046.455-.069h.134c.166-.032.339-.053.51-.085h.083c.343-.066.678-.13 1.018-.216-2.814-1.03-5.17-3.46-7.198-6.92M128.746 98.711c2.041 0 4.102-.2 6.172-.597 1.914-.347 3.832-.88 5.754-1.55a20.92 20.92 0 0 0 5.05 1.722 21.46 21.46 0 0 0 4.311.425h-21.287z"
          fill="#ECF0F4"
        />
        <path
          d="M150.033 98.711c5.039 0 9.03-.597 12.42-2.225a18.38 18.38 0 0 0 6.654 2.099c.36.035.716.068 1.088.094h.066c.167 0 .344 0 .524.033h.611-21.377.014zM171.408 98.711h1.166c.07 0 .134 0 .2-.032.127 0 .262 0 .397-.033h.193c.134 0 .281-.032.421-.045h.036c.043 0 .085-.032.128-.032.15-.033.307-.046.454-.07.049 0 .088 0 .14-.032.167-.032.34-.049.512-.081h.082c.343-.066.678-.131 1.018-.216a8.883 8.883 0 0 0 3.12.548l-7.86.032-.007-.039zM164.471 80.823v-.033a98.108 98.108 0 0 1-6.723 5.893 77.224 77.224 0 0 1-3.513 2.638c.985 1.178 1.988 2.282 3.043 3.289 1.603 1.553 3.316 2.862 5.185 3.872.426-.21.851-.438 1.264-.679 1.906-1.112 3.615-2.613 5.23-4.584-1.672-2.855-3.14-6.392-4.478-10.4"
          fill="#ECF0F4"
        />
        <path
          d="M230.246.011H217.545c-.687.033-1.353.056-2.012.098-.31.667-.63 1.334-.937 2.005-10.514 22.394-21.556 41.8-32.766 57.226-5.271 16.223-9.14 26.067-13.884 31.858 2.028 3.46 4.388 5.893 7.194 6.924.082-.033.147-.033.22-.05h.046c.05 0 .102-.032.155-.032.115-.033.238-.053.352-.088.074-.033.135-.036.209-.06.106-.032.216-.055.315-.081.065-.033.13-.043.196-.056.163-.053.31-.092.466-.141.074-.032.152-.06.233-.079.09-.032.18-.055.262-.094.094-.033.188-.05.27-.085.074-.033.151-.053.22-.082.185-.066.365-.121.549-.193.05 0 .098-.046.151-.056.11-.046.225-.082.336-.131.04-.033.09-.036.143-.053.384-.16.78-.324 1.177-.503h.042a33.419 33.419 0 0 0 1.705-.818c18.228-10.183 27.43-44.397 56.04-95.505h-7.99l.009-.004z"
          fill="url(#o)"
          transform="translate(.987)"
        />
        <path
          d="M73.01 2.257c.045 0 .085 0 .13.032.11 0 .22 0 .331.036h.11c.201.032.402.05.606.079.037 0 .07 0 .102.032.168.032.34.06.511.085.038 0 .086.033.127.033.393.078.794.16 1.178.261.037 0 .074.033.106.033.164.039.311.088.475.134.05 0 .086.032.13.04.193.049.373.098.561.16.008 0 .02 0 .041.032.16.049.323.111.491.167.066.032.127.046.188.062.115.05.242.098.352.144.066 0 .13.046.2.07.151.068.31.13.466.195.082.033.151.07.23.099.09.046.183.088.281.12.082.04.172.082.25.118.086.047.167.082.25.128 2.028.998 3.897 2.327 5.627 3.939a18.272 18.272 0 0 1 1.995-1.812C83.965 3.76 79.68 2.23 74.735 2.23c-.572 0-1.145.033-1.726.076"
          fill="#ECF0F4"
        />
        <path
          d="M85.753 8.208a31.884 31.884 0 0 1 3.035 3.272A70.897 70.897 0 0 1 91.56 9.63a29.254 29.254 0 0 0-3.816-3.235 17.858 17.858 0 0 0-1.992 1.812"
          fill="#ECF0F4"
        />
        <path
          d="M72.021 6.285c.581.049 1.154.07 1.726.07 4.945 0 9.23-1.53 13.013-4.21 3.992 3.15 8.818 4.25 15.52 4.25H69.822c.749 0 1.48-.045 2.2-.11"
          fill="url(#p)"
          transform="matrix(1 0 0 -1 .987 8.541)"
        />
        <path
          d="M102.28 9.63c-6.702 0-11.528-1.1-15.52-4.25a29.485 29.485 0 0 0 3.812-3.234c5.558 3.533 11.063 5.873 16.49 6.895a33.46 33.46 0 0 0 6.17.589h-10.951z"
          fill="url(#q)"
          transform="matrix(1 0 0 -1 .987 11.776)"
        />
        <path
          d="M181.845 59.372c2.883-8.89 6.183-19.683 10.277-32.774 3.689-11.795 10.22-20.612 22.485-24.46.324-.659.63-1.338.945-2.004-19.995 1.198-29.34 11.369-34.043 26.431-8.224 26.296-13.205 43.342-18.002 54.204 6.126-5.856 12.252-13.046 18.338-21.397"
          fill="url(#r)"
          transform="translate(.987)"
        />
      </g>
    </svg>
  );
};
