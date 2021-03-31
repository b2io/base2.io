import React, { FC } from 'react';
import { SvgProps } from './types';

export const LogoIcon: FC<SvgProps> = ({
  height = '100%',
  width = '100%',
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 46 45"
      {...props}
    >
      <path
        fill="#F63A52"
        d="M32.064 2.273c-1.124-.55-2.302-1.009-3.524-1.367l.584 42.143c.805-.26 1.59-.565 2.353-.91l.587-39.866zM25.612 43.878c.776-.118 1.539-.276 2.286-.471L28.486.89C27.37.566 26.216.324 25.034.176l.578 43.702zM42.262 12.446l.53 18.072c1.09-2.603 1.694-5.457 1.694-8.45 0-3.45-.8-6.714-2.224-9.622M39.022 7.591l.563 28.283c.765-.942 1.452-1.948 2.054-3.008h-.01l.6-20.485c-.858-1.737-1.939-3.346-3.207-4.79M38.972 7.535c-.988-1.118-2.09-2.136-3.285-3.038l.574 34.692c.748-.603 1.456-1.253 2.12-1.946l.591-29.708zM35.632 4.456c-1.096-.82-2.27-1.543-3.511-2.155l.577 39.237c.813-.43 1.596-.909 2.344-1.433l.59-35.649zM24.963.168C24.06.058 23.141 0 22.208 0v44.134c.734 0 1.46-.036 2.175-.105l.58-43.86z"
      />
      <path
        fill="#ECF0F4"
        d="M19.41.224c-.34.003-.611.277-.608.611l.388 42.856c0 .121.1.22.223.221.124.001.226-.098.227-.22L20.028.834v-.01c-.003-.335-.28-.604-.619-.601M3.782 10.274c-.339.005-.609.282-.603.616l.388 23.09c.002.118.1.216.221.218.125.002.227-.096.23-.219l.387-23.089v-.02c-.005-.335-.285-.602-.623-.596M.585 16.339c-.338.015-.6.3-.584.634L.388 28.65c.006.114.098.207.216.213.124.006.23-.09.235-.213l.388-11.677v-.057c-.016-.334-.303-.593-.642-.577M6.909 6.338c-.339.005-.61.28-.605.614l.387 30.777c.002.12.1.219.223.22.125.002.226-.097.228-.22L7.53 6.952v-.015c-.005-.335-.282-.603-.621-.599M13.16 2.008c-.339.003-.61.277-.607.612l.387 39.324c.001.12.1.22.223.22.125.001.227-.097.228-.22L13.78 2.62v-.012c-.003-.334-.28-.603-.62-.6M16.285.862c-.339.003-.611.277-.608.611l.388 41.594c.001.121.1.22.223.22.125.002.227-.097.228-.22l.387-41.594v-.01c-.003-.336-.28-.604-.618-.601M10.035 3.77c-.339.003-.61.277-.607.612l.388 35.845c.001.12.1.22.223.22.124.002.227-.097.228-.22l.387-35.845v-.013c-.004-.335-.28-.603-.62-.6"
      />
    </svg>
  );
};

export const LogoWithName: FC<SvgProps> = ({
  height = '100%',
  width = '100%',
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 212 53"
      {...props}
    >
      <path
        fill="#FFF"
        d="M70.858 18.939h6.145c-.785 4.31-4.576 7.053-9.282 7.053-6.93 0-10.067-5.355-10.067-9.926 0-4.572 2.746-9.927 9.674-9.927 7.322 0 9.675 5.486 9.675 9.535 0 .914 0 1.436-.13 1.828H63.536c.392 2.09 1.7 3.396 4.053 3.396 1.7 0 2.876-.653 3.268-1.959zm-7.32-5.094h7.059c-.13-1.698-1.308-3.265-3.53-3.265-1.961 0-3.138.914-3.53 3.265zM6.537 24.033v1.698H.26V.13h6.276v7.836C7.583 6.923 9.15 6.14 11.374 6.14c5.49 0 8.89 3.788 8.89 9.927 0 6.138-3.53 9.926-9.02 9.926-1.831 0-3.661-.653-4.707-1.959zm7.713-7.967c0-2.743-1.569-4.572-3.922-4.572s-4.053 1.829-4.053 4.572c0 2.742 1.57 4.571 4.053 4.571 2.223 0 3.922-1.829 3.922-4.571zM40.266 19.07h5.36c.131 1.436 1.439 2.35 3.007 2.35 1.308 0 2.223-.522 2.223-1.436 0-3.135-9.936.13-9.936-7.837 0-3.526 3.007-6.008 6.929-6.008 4.837 0 8.106 2.612 8.236 6.4h-5.36c-.13-1.306-1.307-2.22-2.615-2.22-1.176 0-1.96.522-1.96 1.436 0 3.396 10.197-.783 10.197 7.837 0 3.788-3.007 6.27-7.714 6.27-4.837.13-8.236-2.613-8.367-6.792zM90.6.13V6.4h4.836v5.225H90.6v5.877c0 1.698.915 2.482 2.484 2.482h2.353V25.6h-3.268c-4.706 0-7.844-2.612-7.844-7.445v-6.661h-3.53V6.269h3.53V0h6.275v.13zM124.46 16.066c0-5.747 4.314-9.927 10.328-9.927 6.013 0 10.328 4.18 10.328 9.927s-4.315 9.926-10.328 9.926c-6.014 0-10.328-4.18-10.328-9.926zm14.38 0c0-2.743-1.568-4.572-4.052-4.572-2.354 0-4.053 1.829-4.053 4.572 0 2.742 1.569 4.571 4.053 4.571 2.353 0 4.052-1.829 4.052-4.571zM96.09 6.4L102.365 6.4 105.242 16.849 108.118 6.4 113.739 6.4 116.616 16.849 119.492 6.4 125.767 6.4 119.361 25.6 114.001 25.6 110.994 15.021 107.987 25.6 102.627 25.6zM38.959 13.323V25.73h-6.275V23.38c-.523 1.567-2.484 2.612-4.968 2.612-3.53 0-6.145-2.612-6.145-5.747 0-3.788 2.746-6.139 6.798-6.139h2.746c1.046 0 1.569-.653 1.569-1.567 0-1.176-.915-1.96-2.615-1.96-2.092 0-2.876 1.307-2.876 2.613h-5.491c.13-3.918 3.138-7.184 8.76-7.184 4.836.13 8.497 3.004 8.497 7.315zm-6.275 4.702h-3.269c-1.046 0-1.96.783-1.96 1.959 0 1.045.784 1.698 1.96 1.698 2.092 0 3.138-1.698 3.138-3.527v-.13h.13z"
        transform="translate(64 13)"
      />

      <path
        fill="#F63A52"
        d="M37.48 2.627c-1.314-.636-2.69-1.166-4.119-1.58l.682 48.698c.942-.3 1.86-.652 2.75-1.052l.687-46.066zM29.938 50.704c.907-.136 1.799-.32 2.672-.545l.688-49.13C31.992.653 30.645.374 29.262.202l.676 50.5zM49.4 14.382l.62 20.883C51.296 32.257 52 28.959 52 25.5c0-3.986-.935-7.757-2.6-11.118M45.614 8.772l.658 32.683c.893-1.09 1.697-2.251 2.4-3.476h-.012l.702-23.672c-1.002-2.007-2.266-3.866-3.748-5.535M45.555 8.708c-1.156-1.293-2.443-2.469-3.84-3.511l.67 40.089c.876-.698 1.703-1.449 2.479-2.25l.691-34.328zM41.651 5.15c-1.28-.95-2.654-1.784-4.105-2.49L38.222 48c.95-.498 1.865-1.05 2.74-1.656l.69-41.194zM29.18.194C28.124.067 27.05 0 25.96 0v51c.857 0 1.705-.042 2.541-.121L29.18.194z"
        transform="translate(-80 -36) translate(80 32) translate(0 4) translate(1 1)"
      />
      <path
        fill="#ECF0F4"
        d="M22.688.259c-.396.003-.714.32-.71.706l.453 49.523c.001.14.117.254.261.255.145.001.265-.113.266-.255L23.41.965V.953c-.003-.387-.327-.698-.723-.694M4.42 11.872c-.395.007-.71.326-.704.713l.453 26.68c.003.138.117.25.26.253.144.002.265-.11.267-.253l.453-26.68v-.024c-.006-.387-.333-.695-.728-.689M.684 18.88c-.396.019-.702.347-.683.734l.453 13.493c.007.131.114.24.252.246.145.007.269-.104.275-.246l.453-13.493v-.066c-.018-.387-.354-.686-.75-.667M8.076 7.324c-.396.005-.713.323-.707.71l.452 35.564c.002.14.118.253.26.255.146.001.265-.112.267-.255l.454-35.565v-.017c-.005-.387-.33-.697-.726-.692M15.383 2.32c-.396.004-.714.32-.71.707l.453 45.442c.001.14.117.253.26.254.147.002.266-.112.267-.254l.453-45.442v-.013c-.003-.387-.327-.697-.723-.694M19.036.996c-.396.004-.714.32-.71.707l.452 48.064c.002.14.118.254.261.255.146.001.265-.113.266-.255l.453-48.064V1.69c-.003-.387-.327-.698-.722-.694M11.73 4.356c-.396.004-.713.32-.71.708l.454 41.42c.001.14.117.254.26.256.146.001.266-.113.267-.255l.453-41.421v-.015c-.005-.387-.328-.697-.724-.693"
        transform="translate(-80 -36) translate(80 32) translate(0 4) translate(1 1)"
      />
    </svg>
  );
};
