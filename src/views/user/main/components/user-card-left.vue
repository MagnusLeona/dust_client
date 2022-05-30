<template>
  <div class="left">
    <div class="left-name flex-center">
      <div class="avator">
        <svg-icon icon="icon-default-avator" class="icon"></svg-icon>
        <div class="welcome">Hi~</div>
      </div>
      <div class="name">
        <div>{{ user?.data?.name || "Mr.Who" }}</div>
        <div>
          <svg-icon icon="icon-settings" class="icon-settings"></svg-icon>
        </div>
      </div>
    </div>
    <div class="left-header flex-center">
      <div class="menus">
        <div class="menu-button home">
          <input
            type="checkbox"
            class="menus-input"
            :checked="selected === 0"
            id="user-home-menu"
            key="user-home-menu"
            @change="
              () =>
                (selected =
                  selected === 0
                    ? $emit('update:selected', 0)
                    : $emit('update:selected', 0))
            "
          />
          <label class="menu flex-center" for="user-home-menu">
            <svg-icon icon="icon-home-menu" class="icon-menu"></svg-icon>
          </label>
        </div>
        <div class="menu-button loved">
          <input
            type="checkbox"
            class="menus-input"
            :checked="selected === 1"
            id="user-loved-menu"
            key="user-loved-menu"
            @change="
              () =>
                selected === 1
                  ? $emit('update:selected', 0)
                  : $emit('update:selected', 1)
            "
          />
          <label class="flex-center" for="user-loved-menu">
            <svg-icon icon="icon-loved" class="icon-menu"></svg-icon>
          </label>
        </div>
        <div class="menu-button notice">
          <input
            type="checkbox"
            class="menus-input"
            :checked="selected === 2"
            id="user-notice-menu"
            key="user-notice-menu"
            @change="
              () =>
                selected === 2
                  ? $emit('update:selected', 0)
                  : $emit('update:selected', 2)
            "
          />
          <label class="flex-center" for="user-notice-menu">
            <svg-icon icon="icon-notice" class="icon-menu"></svg-icon>
          </label>
        </div>
        <div class="menu-button design">
          <input
            type="checkbox"
            class="menus-input"
            :checked="selected === 3"
            id="user-design-menu"
            key="user-design-menu"
            @change="
              selected =
                selected === 3
                  ? $emit('update:selected', 0)
                  : $emit('update:selected', 3)
            "
          />
          <label class="menu flex-center" for="user-design-menu">
            <svg-icon icon="icon-my-design" class="icon-menu"></svg-icon>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {},
    },
    selected: {
      type: Number,
      default: () => 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.left {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  background-image: radial-gradient(
      circle at 45% 10%,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 0.1%,
      transparent 0.3%,
      transparent 100%
    ),
    radial-gradient(
      circle at 80% 6%,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 0.1%,
      transparent 0.3%,
      transparent 100%
    ),
    radial-gradient(
      circle at 24% 5%,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 0.15%,
      transparent 0.3%,
      transparent 100%
    ),
    radial-gradient(
      circle at 4% -2%,
      rgba(169, 106, 3, 0.3) 0%,
      rgba(169, 106, 3, 0.2) 6%,
      transparent 4%,
      transparent 100%
    ),
    radial-gradient(
      circle at 2% 4%,
      rgba(169, 106, 3, 0.4) 0%,
      rgba(169, 106, 3, 0.2) 6%,
      transparent 3%,
      transparent 100%
    ),
    radial-gradient(
      circle at -2% 8%,
      rgba(169, 106, 3, 0.2) 0%,
      rgba(169, 106, 3, 0.1) 8%,
      transparent 3%,
      transparent 100%
    ),
    radial-gradient(
      circle at 88% 4%,
      rgba(255, 255, 255, 0.03) 0%,
      rgba(255, 255, 255, 0.03) 7%,
      transparent 7%,
      transparent 100%
    ),
    radial-gradient(
      circle at 0% 6%,
      rgba(169, 106, 3, 0.1) 0%,
      rgba(169, 106, 3, 0.05) 3%,
      transparent 5%,
      transparent 100%
    ),
    linear-gradient(135deg, rgb(16, 50, 85), rgb(66, 0, 61));

  &-header {
    width: 100%;
    height: 80%;
    margin-top: auto;
    border-bottom-left-radius: 16px;
    border: none;
    padding-bottom: 60px;
    clip-path: polygon(
      0 2%,
      8% 1.3%,
      15% 0,
      24% 1.5%,
      36% 0.4%,
      55% 0.2%,
      69% 1%,
      85% 0,
      100% 1.8%,
      100% 100%,
      0 100%
    );
    background-image: radial-gradient(
        100% 50% ellipse at 3% 2%,
        rgba(0, 0, 0, 0.02) 0%,
        rgba(0, 0, 0, 0.02) 8%,
        transparent 3%,
        transparent 100%
      ),
      radial-gradient(
        circle at 95% 2%,
        rgba(0, 0, 0, 0.03) 0%,
        rgba(0, 0, 0, 0.03) 3%,
        transparent 3%,
        transparent 100%
      ),
      radial-gradient(
        ellipse at 27% -4%,
        rgba(0, 0, 0, 0.01) 0%,
        rgba(0, 0, 0, 0.01) 7%,
        transparent 7%,
        transparent 100%
      ),
      radial-gradient(
        200% 80% ellipse at 59% 2%,
        rgba(0, 0, 0, 0.03) 0%,
        rgba(0, 0, 0, 0.03) 7%,
        transparent 7%,
        transparent 100%
      ),
      radial-gradient(
        circle at 45% 8%,
        rgba(0, 0, 0, 0.02) 0%,
        rgba(0, 0, 0, 0.02) 2%,
        transparent 3%,
        transparent 100%
      ),
      radial-gradient(
        circle at 72% 12%,
        rgba(0, 0, 0, 0.02) 0%,
        rgba(0, 0, 0, 0.03) 1%,
        transparent 1.2%,
        transparent 100%
      ),
      radial-gradient(
        circle at 9% 11%,
        rgba(0, 0, 0, 0.03) 0%,
        rgba(0, 0, 0, 0.03) 7%,
        transparent 7%,
        transparent 100%
      ),
      linear-gradient(0, hsla(245, 0%, 100%, 1), hsla(230, 0%, 100%, 1));

    .menus {
      width: 180px;
      height: 180px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;

      .menu-button {
        > label {
          width: 70px;
          height: 70px;
          border-radius: 8px;
          transition: all ease 0.5s;
        }
      }

      .home {
        > label {
          box-shadow: inset 0 0 18px rgba(255, 214, 168, 0.8);
        }
        > input:checked + label {
          box-shadow: 0 0 20px rgba(255, 214, 168, 0.8);
        }
      }

      .loved {
        > label {
          box-shadow: inset 0 0 18px rgba(19, 34, 122, 0.8);
        }
        > input:checked + label {
          box-shadow: 0 0 20px rgba(19, 34, 122, 0.8);
        }
      }

      .notice {
        > label {
          box-shadow: inset 0 0 18px rgba(26, 250, 41, 0.8);
        }
        > input:checked + label {
          box-shadow: 0 0 20px rgba(26, 250, 41, 0.8);
        }
      }

      .design {
        > label {
          box-shadow: inset 0 0 18px rgba(212, 35, 122, 0.8);
        }
        > input:checked + label {
          box-shadow: 0 0 20px rgba(212, 35, 122, 0.8);
        }
      }

      &-input {
        display: none;
      }
    }
  }

  &-name {
    width: 200px;
    height: 80px;
    position: absolute;
    left: -13px;
    border-radius: 15px;
    bottom: 20px;
    z-index: 2;
    align-items: flex-start;
    padding-left: 20px;
    flex-direction: column;
    box-shadow: 2px 3px 3px rgba(210, 57, 24, 0.1),
      3px 4px 3px rgba(210, 57, 24, 0.1), 5px 7px 5px rgba(210, 57, 24, 0.1),
      8px 10px 6px rgba(210, 57, 24, 0.1), 10px 14px 10px rgba(210, 57, 24, 0.1);
    background-image: radial-gradient(
        circle at 68% 88%,
        hsla(193, 0%, 4%, 0.04) 0%,
        hsla(193, 0%, 4%, 0.04) 68%,
        transparent 68%,
        transparent 100%
      ),
      radial-gradient(
        circle at 90% 140%,
        hsla(193, 0%, 4%, 0.04) 0%,
        hsla(193, 0%, 4%, 0.03) 45%,
        transparent 45%,
        transparent 100%
      ),
      radial-gradient(
        circle at 18% 4%,
        hsla(193, 0%, 4%, 0.03) 0%,
        hsla(193, 0%, 4%, 0.03) 26%,
        transparent 26%,
        transparent 100%
      ),
      radial-gradient(
        circle at 17% 69%,
        hsla(193, 0%, 4%, 0.03) 0%,
        hsla(193, 0%, 4%, 0.03) 15%,
        transparent 15%,
        transparent 100%
      ),
      radial-gradient(
        circle at 120% 26%,
        hsla(193, 0%, 4%, 0.02) 0%,
        hsla(193, 0%, 4%, 0.02) 45%,
        transparent 45%,
        transparent 100%
      ),
      linear-gradient(45deg, rgb(210, 57, 24), rgba(187, 114, 141, 0.59));

    .avator {
      width: 100%;
      height: 30px;
      border-radius: 100%;
      display: flex;

      .welcome {
        margin-left: auto;
        margin-right: 20px;
        color: rgba(255, 255, 255, 0.7);
      }
    }

    .name {
      width: 100%;
      margin-top: 5px;
      padding-right: 20px;
      color: rgba(255, 255, 255, 0.7);
      font-size: 13px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}

.icon {
  width: 30px;
  height: 30px;
}

.icon-menu {
  width: 40px;
  height: 40px;
}

.icon-settings {
  width: 25px;
  height: 25px;
}
</style>
